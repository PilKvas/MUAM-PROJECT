

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

const button1 = document.querySelector('#my-button1');
const list1 = document.querySelector('#my-list1');

button1.addEventListener('click', () => {
  if (list1.style.display === 'block') {
    // Если список скрыт, то показываем его
    list1.style.display = 'none';
    button1.style.transform = 'rotateX(360deg)';
  } else {
    // Иначе скрываем его
    list1.style.display = 'block';
    button1.style.transform = 'rotateX(180deg)';
  }
});


const button2 = document.querySelector('#my-button2');
const list2 = document.querySelector('#my-list2');

button2.addEventListener('click', () => {
  if (list2.style.display === 'block') {
    // Если список скрыт, то показываем его
    list2.style.display = 'none';
    button2.style.transform = 'rotateX(360deg)';
  } else {
    // Иначе скрываем его
    list2.style.display = 'block';
    button2.style.transform = 'rotateX(180deg)';
  }
});

  var menuToggle = document.querySelector('.menuToggle');
  var navigation = document.querySelector('.navigation');
  var body = document.querySelector('body');

menuToggle.addEventListener('click',() => {
  

  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');

  const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
  
  if (body.style.overflow === 'hidden') {
    // Если скролл заблокирован, то мы должны его разблокировать
    body.style.overflow = 'auto';
    body.style.paddingRight = '';
  } else {
    // Иначе мы блокируем прокрутку
    body.style.overflow = 'hidden';
    body.style.paddingRight = `${scrollBarWidth}px`;
  }
});


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