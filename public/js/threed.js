function threed() {
    let anim_flag = true;
    console.log(array[0].name);
    console.log(array);
    console.log(count);
    // 商品画像の板の数
    const num = count;
    const world_width = window.innerWidth;
    const world_height = window.innerHeight;

    //----------------------------------
    // 1．レンダラーをHTMLに配置　※レンダラー：3Dの数値データを画像化してくれるもの
    //----------------------------------

    // 1-1 レンダラーオブジェクトの作成  { antialias:true }を追加するときれいになる
    // const renderer = new THREE.WebGLRenderer({ antialias:true });
    const renderer = new THREE.CSS3DRenderer();

    // 1-2 レンダラーのサイズを設定 ブラウザのサイズにあわせる
    renderer.setSize(window.innerWidth, window.innerHeight);

    // 1−3 レンダラーを three-canvas の小要素として追加する
    const $three_canvas = document.querySelector(".three-canvas");
    $three_canvas.appendChild(renderer.domElement);

    //----------------------------------
    // 2．シーンを作成
    //----------------------------------

    // 2-1 シーンオブジェクトの作成
    const scene = new THREE.Scene();

    //----------------------------------
    // 3．カメラを配置
    //----------------------------------

    // 3-1 画角の設定　※画角：単位は度。小さいほど望遠（視野狭・遠近感小）、大きいほど広角（視野広・遠近感大）。
    const fov = 40;

    // 3-2 アスペクト比（縦横比）の設定　通常 画面の幅/高さ
    const aspect = window.innerWidth / window.innerHeight;

    // 3-3　この値より手前は描画されない。
    const near = 1;

    // 3-4　この値より奥は描画されない。
    const far = 3000;

    // 3-5 カメラオブジェクトを上記設定で作成　※perspectiveカメラ：透視投影カメラ。近くのモノは大きく・遠くのモノは小さく、遠近法的に映る。
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

    // 3-6 カメラの位置を移動　手前に移動
    camera.position.z = 1500;

    // 3-7 カメラをシーンに追加　レンダラー、シーンはオブジェクトじゃないので追加しない
    scene.add(camera);

    // 滑らかにカメラコントローラーを制御する

    //   const controls = new THREE.OrbitControls(camera, document.body);
    //   controls.enableDamping = true;
    //   controls.dampingFactor = 0.2;

    // //----------------------------------
    // // 4．モデルを配置
    // //----------------------------------

    // 4-1. cssで平面作成
    const element = document.createElement("div");
    //   logo追加
    // element.classList.add("logo");

    // element.innerHTML = '<img src="./images/3d_logo.png">';
    // 4-2. divと3dオブジェクト（平面の板）をリンク
    const box = new THREE.CSS3DObject(element);

    //   box.position.z = 30;
    //   box.position.x = 530;
    //   box.position.y = 45;

    // 4-3. シーンに追加
    scene.add(box);

    // 商品画像をたくさんちらばそう
    const sq_array = new Array();
    console.log(array);
    // グループを作成（たくさんのオブジェクトをひとまとまりにする）
    const group = new THREE.Object3D();

    // for (const item of array) {
    // }
    for (let i = 0; i < num; i++) {
        // divを作成
        const sq_element = document.createElement("div");

        // クラスを追加 .box
        sq_element.classList.add("three_card_wrapper");

        console.log(array[i]);
        // .boxの中にhtmlをつくって入れる
        let html = `<img src='${array[i].image}' alt='sumune' class="three_card_image">`;
        html += '<div class="three_card_text">';
        html += "<ul>";
        html += '<div class="three_card_text_left">';
        html += "<li>" + "名前" + "</li>";
        html += "<li>" + "出身地" + "</li>";
        html += "<li>" + "趣味" + "</li>";
        html += "<li>" + "ひとこと" + "</li>";
        html += "</div>";
        html += '<div class="three_card_text_right">';
        html += "<li>" + array[i].name + "</li>";
        html += "<li>" + array[i].area + "</li>";
        html += "<li>" + array[i].hobby + "</li>";
        html += "<li>" + array[i].word + "</li>";
        html += "</div>";
        html += "</ul>";
        html += "</div>";
        html += "</div>";
        sq_element.innerHTML = html;

        // 画像をクリックしたとき、どれをクリックしたかわかりやすいように、それぞれに背番号をつけておく
        sq_element.num = i;

        // 配列に、3dオブジェクトをいれておく
        sq_array[i] = new THREE.CSS3DObject(sq_element);

        // xyzの座標をランダム指定して配置
        sq_array[i].position.x = Math.random() * world_width - world_width / 2;
        sq_array[i].position.y =
            Math.random() * world_height - world_height / 2;
        sq_array[i].position.z = 500 - Math.random() * 1000;

        // clickされたものかどうかを判定するためのフラグ（しるし）
        // clickされたら回転しながら中央にくるので1
        sq_array[i].status = 0;

        // それぞれの商品画像をクリックしたときに実行することを記述
        sq_element.addEventListener("click", () => {
            // クリックした画像の背番号を取得
            let index = sq_element.num;

            // もし　クリックされてない　商品画像だったら
            if (sq_array[index].status == 0) {
                // lookatはずし
                sq_array[index].status = 1;

                // groupから外れて、真ん中にあるロゴ（box）にくっつけることで、groupの回転から抜ける
                // box.attach(sq_array[index]);

                // クリックしたら画面中央に回転しながら移動して、移動完了したら横に拡大する
                gsap.to(sq_array[index].position, {
                    duration: 1.5,
                    x: 0,
                    y: 0,
                    z: camera.position.z - 800,
                });
                // 回転する
                gsap.to(sq_array[index].rotetion, {
                    duration: 1.5,
                    x: Math.PI * 2,
                    y: Math.PI * 2,
                    z: 0,
                });
            }
            // クリックされて拡大表示されていたら
            else {
                // lookatをする対象に
                sq_array[index].status = 0;

                gsap.to(sq_array[index].rotation, {
                    duration: 1,
                    x: 1,
                    y: 1,
                    z: Math.PI * 4,
                });

                gsap.to(sq_element, {
                    width: "240px",
                    duration: 0.5,
                    onComplete: () => {
                        // 一旦フェードアウトさせる
                        gsap.to(sq_element, {
                            duration: 1,
                            opacity: 0,
                            onComplete: () => {
                                // ランダムな位置へ移動
                                sq_array[index].position.x =
                                    Math.random() * world_width -
                                    world_width / 2;
                                sq_array[index].position.y =
                                    Math.random() * world_height -
                                    world_height / 2;
                                sq_array[index].position.z =
                                    1000 - Math.random() * 2000;
                                sq_array[index].status = 0;

                                // グループから外れていたので、グループに再度追加する
                                group.add(sq_array[index]);

                                // フェードイン
                                gsap.to(sq_element, {
                                    duration: 0.5,
                                    opacity: 1,
                                });
                            },
                        });
                    },
                });
            }
        });

        // 作った3dオブジェクトをグループに追加
        group.add(sq_array[i]);
    }

    // グループをシーンに追加（ここで初めて表示される）
    scene.add(group);

    //----------------------------------
    // 7．アニメーション
    //----------------------------------

    let theta = 0;

    function loop() {
        box.rotation.x += 0.01;
        box.rotation.y += 0.01;
        box.rotation.z += 0.01;

        // group回転
        group.rotation.y -= 0.001;

        // いつもカメラ（正面）を向くように
        for (let i = 0; i < num; i++) {
            if (sq_array[i].status == 0)
                sq_array[i].lookAt(new THREE.Vector3(0, 0, camera.position.z));
        }

        //上記設定で回転させた設定で画面に描画
        renderer.render(scene, camera);

        // 画面を描画するたびに anim()関数を実行　→　永遠に繰り返す
        requestAnimationFrame(loop);
    }

    //上記アニメーションをする関数 loop を１度実行する
    loop();
}
