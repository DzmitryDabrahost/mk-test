// header slider

const slider = document.querySelector('.slider');
const prev = document.querySelector('.slider-arrows__left-img');
const next = document.querySelector('.slider-arrows__right-img');
const title = document.querySelector('.slider-content-title');
const subtitle = document.querySelector('.slider-content-subtitle');
const formAction = document.querySelector('.header-button');
const sliderContainer = document.querySelector('.slider-content');
let count = 1;
const slideContent = [
        {id: 1, title: 'Взыскание дебиторской задолженности', subtitle: '', src: '#'},
        {id: 2, title: 'Юридический аутсорсинг', subtitle: 'Гарантия своевременности и качества услуг', src: '#'},
        {id: 3, title: 'Юридическая консультация', subtitle: 'Детальные разъяснения вопросов по ведению бизнеса от профессионалов', src: '#'},
        {id: 4, title: 'Ликвидация предприятия', subtitle: 'Эффективное решение сложных задач', src: '#'},
        {id: 5, title: 'Регистрация ООО', subtitle: 'Гарантируем мин имальные сроки регистрации под ключ', src: '#'}
];

const changeSlider = () => {
    sliderContainer.classList.remove('show-block');
    sliderContainer.classList.add('hide-block');
    slideContent.forEach((item) => {
        if(item.id === count) {
            slider.style.backgroundImage = `url(../../assets/images/slides/slider${count}.png)`;
            title.textContent = `${item.title}`;
            subtitle.textContent = `${item.subtitle}`;
            formAction.action = `${item.src}`; 
        }
    });
        sliderContainer.classList.remove('hide-block');
        sliderContainer.classList.add('show-block');
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
const sliderItems = document.querySelectorAll('.slide-content-image-item');

let viewSlide = 0;
 
btnNext.addEventListener('click', () => {
    btnPrev.classList.remove('inactivity');
    if (viewSlide < sliderItems.length - 2) { 
        viewSlide++;
    } else if (viewSlide < sliderItems.length - 1) {
        viewSlide++;
        btnNext.classList.add('inactivity');
    }
    sliderBlock.style.left = `-${viewSlide * viewport}px`;
});
 
btnPrev.addEventListener('click', () => {
    btnNext.classList.remove('inactivity');
    if (viewSlide > 1) { 
        viewSlide--; 
    } else if (viewSlide === 1) { 
        viewSlide--;
        btnPrev.classList.add('inactivity'); 
    }
    sliderBlock.style.left = `-${viewSlide * viewport}px`;
});

// reviews slider 

const nextBtn = document.querySelector('.reviews-card-buttons-arrows-right');
const prevBtn = document.querySelector('.reviews-card-buttons-arrows-left');
const parentBlock = document.querySelector('.reviews-card-block');
const blockSlider = document.querySelectorAll('.reviews-card');
const widthCard = document.querySelector('.reviews-card').offsetWidth;
const pointArray = document.querySelectorAll('.reviews-card-buttons__point');
let countSlide = 0;

nextBtn.addEventListener('click', () => {
    prevBtn.classList.remove('inactivity');
    countSlide++;
    if (countSlide === blockSlider.length - 2) {
        nextBtn.classList.add('inactivity');
    };
    removeActiveClass();
    parentBlock.style.left = `-${(countSlide * widthCard) + (countSlide * +window.getComputedStyle(parentBlock).columnGap.slice(0, 2))}px`;
});

prevBtn.addEventListener('click', () => {
    nextBtn.classList.remove('inactivity');
    countSlide--;
    removeActiveClass();
    if (countSlide === 0) {
        prevBtn.classList.add('inactivity');
    };
    parentBlock.style.left = `-${(countSlide * widthCard) + (countSlide * +window.getComputedStyle(parentBlock).columnGap.slice(0, 2))}px`;;
});

const removeActiveClass = () => {
    pointArray.forEach((item) => {
        item.classList.remove('point-active');
    });
    pointArray[countSlide].classList.add('point-active');
};