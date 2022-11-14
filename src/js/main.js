document.addEventListener('DOMContentLoaded', () => {


    var swiper = new Swiper(".main-slider", {
        pagination: {
            el: ".main-slider-pagination",
            dynamicBullets: true,
        },
    });



let styles = {
    "overflow": "hidden",
};
const disable = () => {
    document.body.classList.add('no-scroll');
    Object.keys(styles).forEach(key => {
        document.body.style[key] = styles[key];
    })
}
const enable = () => {
    document.body.classList.remove('no-scroll');
    Object.keys(styles).forEach(key => {
        document.body.style.removeProperty(key);
    })
}


})

