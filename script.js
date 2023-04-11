

// Модальное окно для кнопки Eще //

const openModal = document.getElementById('open-modal');
const modal = document.getElementById('modal');
const close = document.getElementsByClassName('close')[0];

openModal.addEventListener('click', () => {
  modal.style.display = 'block';
});

close.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});


function toggleMenu() {
  var menuToggle = document.querySelector('.menuToggle');
  var navigation = document.querySelector('.navigation');
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
  body.classList.toggle('active');
}


let position = 0;
const slidesToShow = 3;
const slidesToScroll = 1;
const container = document.querySelector('.slider-container');
const track = document.querySelector('.slider-track');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const items = document.querySelectorAll('.slider-item');
const itemCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
  item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click',() => {
  const itemLeft = itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
  position -= itemLeft >= slidesToScroll ? movePosition: itemLeft * itemWidth;

  setPosition();
  checkBtns();
});


btnPrev.addEventListener('click',() => {
  const itemLeft = Math.abs(position) / itemWidth;
  position += itemLeft >= slidesToScroll ? movePosition: itemLeft * itemWidth;

  setPosition();
  checkBtns();
});

const setPosition = () => {
  track.style.transform = `translateX(${position}px`;
}

const checkBtns = () => {
  btnPrev.disebled = position === 0;
  btnNext.disebled = position <= -(itemCount - slidesToShow) * itemWidth;
}

checkBtns();

const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    // удалим у кнопки класс btn-up_hide
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    // добавим к кнопке класс btn-up_hide
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener('scroll', () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
      scrollY > 400 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.btn-up').onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}

btnUp.addEventListener();