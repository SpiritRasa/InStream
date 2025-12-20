const sliderElement = document.querySelector('.categories-section__body');
const slidesElement = Array.from(sliderElement.querySelectorAll('.categories-section__slide'));

const nextBtnElement = document.querySelector('.pagination-block__button--right');
const prevBtnElement = document.querySelector('.pagination-block__button--left');
const paginationElement = document.querySelector('.pagination-block__indicator-block');
const paginationElements = Array.from(paginationElement.querySelectorAll('.pagination-block__indicator'));
const slideCount = slidesElement.length;
const paginationCount = paginationElements.length;
let slideIndex = 0;
let indicatorIndex = 0;

nextBtnElement.addEventListener('click', nextSlideFn);
prevBtnElement.addEventListener('click', prevSlideFn);

function prevSlideFn() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    indicatorIndex = (indicatorIndex - 1 + slideCount) % paginationCount;
    console.log('Нажал влево, текущий индекс: ', indicatorIndex);
    updateSlider();
}

function nextSlideFn() {
    slideIndex = (slideIndex + 1) % slideCount;
    indicatorIndex = (indicatorIndex + 1) % paginationCount;
    console.log('Нажал вправо, текущий индекс: ', indicatorIndex);
    updateSlider();
}

function updateSlider() {
    slidesElement.forEach((slide, index) => {
        if (slideIndex === index) {
            slide.style.display = 'flex';
        } else {
            slide.style.display = 'none';
        }
    });
    paginationElements.forEach((paginationElement, index) => {
        if (indicatorIndex === index ) {
            paginationElement.classList.add('indicator-active');
        } else {
            paginationElement.classList.remove('indicator-active');
        }
    })
}

updateSlider();