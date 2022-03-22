function popupImage() {
    var popup = document.getElementById("js-popup");
    if (!popup) return;

    var blackBg = document.getElementById("js-black-bg");
    var showBtn = document.getElementById("js-show-popup");

    closePopUp(blackBg);
    closePopUp(showBtn);
    function closePopUp(elem) {
        if (!elem) return;
        elem.addEventListener("click", function () {
            popup.classList.toggle("is-show");
        });
    }
}
popupImage();
