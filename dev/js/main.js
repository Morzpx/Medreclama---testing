document.addEventListener('DOMContentLoaded', () => {


    let swiper = new Swiper(".mySwiper", {

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
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

$('input[data-type="PHONE"]').inputmask({'mask': '+7 (999) 999-99-99', showMaskOnHover: false});


})