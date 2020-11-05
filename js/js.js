// header slider

const slider = document.querySelector('.slider');
const prev = document.querySelector('.slider-arrows__left-img');
const next = document.querySelector('.slider-arrows__right-img');
const title = document.querySelector('.slider-content-title');
const subtitle = document.querySelector('.slider-content-subtitle');
const sliderContainer = document.querySelector('.slider-content');
let count = 1;
const slideContent = [
        {id: 1, title: 'Взыскание дебиторской задолженности', subtitle: ''},
        {id: 2, title: 'Юридический аутсорсинг', subtitle: 'Гарантия своевременности и качества услуг'},
        {id: 3, title: 'Юридическая консультация', subtitle: 'Детальные разъяснения вопросов по ведению бизнеса от профессионалов'},
        {id: 4, title: 'Ликвидация предприятия', subtitle: 'Эффективное решение сложных задач'},
        {id: 5, title: 'Регистрация ООО', subtitle: 'Гарантируем мин имальные сроки регистрации под ключ '}
];

const changeSlider = () => {
    sliderContainer.classList.remove('show-block');
    sliderContainer.classList.add('hide-block');
    setInterval(() => {
    slideContent.forEach((item) => {
        if(item.id === count) {
            slider.style.backgroundImage = `url(../../assets/images/slides/slider${count}.png)`;
            title.textContent = `${item.title}`;
            subtitle.textContent = `${item.subtitle}`;
        }
    });
        sliderContainer.classList.remove('hide-block');
        sliderContainer.classList.add('show-block');
    }, 2000);
}

slider.addEventListener('click', (e) => {
    target = e.target;
    if(target === prev) {
        count === 1 ? count = slideContent.length : count--;
        changeSlider();
    }
    if(target === next) {
        count === slideContent.length ? count = 1 : count++;
        changeSlider();
    }
});

window.onload = () => {
    changeSlider();
}

// middle slider 

const viewport = document.querySelector('.slide-content-image').offsetWidth;
const btnNext = document.querySelector('.slide-content-arrow-right-item');
const btnPrev = document.querySelector('.slide-content-arrow-left-item');
const sliderBlock = document.querySelector('.slide-content-image-block');
let viewSlide = 0;
 
btnNext.addEventListener('click', (e) => {
    btnPrev.classList.remove('inactivity');
    if (viewSlide < 4) { 
        viewSlide++;
    } else {
        btnNext.classList.add('inactivity');
    }
    sliderBlock.style.left = `-${viewSlide * viewport}px`;
});
 
btnPrev.addEventListener('click', function () {
    btnNext.classList.remove('inactivity');
    if (viewSlide > 0) { 
        viewSlide--; 
    } else { 
        btnPrev.classList.add('inactivity'); 
    }
    sliderBlock.style.left = `-${viewSlide * viewport}px`;
});

// reviews slider 

const nextBtn = document.querySelector('.reviews-card-buttons-arrows-right');
const prevBtn = document.querySelector('.reviews-card-buttons-arrows-left');
const parentBlock = document.querySelector('.reviews-card-block');
const blockSlider = document.querySelectorAll('.reviews-card');
const pointArray = document.querySelectorAll('.reviews-card-buttons__point');
let countSlide = 0;

nextBtn.addEventListener('click', (e) => {
    prevBtn.classList.remove('inactivity');
    removeActiveClass();
    countSlide < blockSlider.length - 2 ? countSlide++ :  nextBtn.classList.add('inactivity');
    parentBlock.style.left = `-${countSlide * (parentBlock.offsetWidth) / 2}px`;
    console.log(countSlide, blockSlider.length)
});

prevBtn.addEventListener('click', (e) => {
    nextBtn.classList.remove('inactivity');
    removeActiveClass();
    if (countSlide > 0) {
        countSlide--;
    } else {
        prevBtn.classList.add('inactivity');
    }
    console.log(countSlide, blockSlider.length)
    parentBlock.style.left = `-${countSlide * (parentBlock.offsetWidth / 2)}px`;
    console.dir(blockSlider);
});

const removeActiveClass = () => {
    pointArray.forEach((item, index) => {
        item.classList.remove('point-active');
        if(index === countSlide + 1) {
            item.classList.add('point-active');
        }
    });
};