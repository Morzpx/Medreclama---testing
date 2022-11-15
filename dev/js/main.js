document.addEventListener('DOMContentLoaded', () => {


    let swiper = new Swiper(".slider", {
        slidesPerView: 2,
        spaceBetween: 10,
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


var dragSrcEl = null;

function handleDragStart(e) {
  this.style.opacity = '0.4';

  dragSrcEl = this;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();

  }

  e.dataTransfer.dropEffect = 'move';

  return false;
}

function handleDragEnter(e) {
  this.classList.add('over');
}

function handleDragLeave(e) {
  this.classList.remove('over');

}

function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }

  if (dragSrcEl != this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }

  return false;
}

function handleDragEnd(e) {
    this.style.opacity = '1';
    items.forEach(function (item) {
    item.classList.remove('over');
    });
}

let items = document.querySelectorAll('.title');
items.forEach(function(item) {
    item = item.parentNode.parentNode
    item.addEventListener('dragstart', handleDragStart, false);
    item.addEventListener('dragenter', handleDragEnter, false);
    item.addEventListener('dragover', handleDragOver, false);
    item.addEventListener('dragleave', handleDragLeave, false);
    item.addEventListener('drop', handleDrop, false);
    item.addEventListener('dragend', handleDragEnd, false);
});


})