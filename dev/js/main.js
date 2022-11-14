document.addEventListener('DOMContentLoaded', () => {


    var swiper = new Swiper(".main-slider", {
        pagination: {
            el: ".main-slider-pagination",
            dynamicBullets: true,
        },
    });


    /*Мобильное меню*/
    document.querySelector('.burger').addEventListener('click', () => {
        let body = document.querySelector('body').classList.toggle('--is-visible')
        disable();
    })
    document.querySelector('.close').addEventListener('click', () => {
        let body = document.querySelector('body').classList.toggle('--is-visible')
        enable()
    })
    /*Мобильное меню*/

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



/*я тут перемудрил с версткой и задублировал скрипт, пришлось делать не универсальный скрипт открытия/закрытия меню - обычно я такое кастомное Г*** не делаю ) */

document.querySelectorAll('.mob__title1').forEach(item => {
    item.addEventListener('click', () => {
        item.parentElement.classList.toggle('--is-menu1')
        })
    })

document.querySelectorAll('.mob__title').forEach(item => {
    item.addEventListener('click', () => {
        const box = document.querySelector('.footer__section-products__box')
        box.classList.toggle('--is-menu')
    })
})

})


let elem = document.querySelector('.elem')
elem.addEventListener("click", false);
elem.addEventListener("click", true);