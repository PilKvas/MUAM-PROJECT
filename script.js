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