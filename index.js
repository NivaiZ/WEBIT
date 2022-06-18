const bodySearch = document.querySelector('body');

const modalCloseClickOutside = () => {
    const nav = document.querySelector('.modal');
    window.addEventListener('click', e => {
        const target = e.target;
        if (!target.closest('.button-modal__btn') && !target.closest('.modal__wrapper')) {
            nav.classList.remove('modal-visible');
            bodySearch.classList.remove('js');
        }
    })
}

modalCloseClickOutside();

const clickModalOpenFunction = () => {
    const clickButtonModal = document.querySelector('.button-modal__btn');
    const modalVisible = document.querySelector('.modal');
    
    clickButtonModal.addEventListener('click', () => {
        bodySearch.classList.add('js');
        clickButtonModal.classList.toggle('button-modal--opened');
        modalVisible.classList.add('modal-visible');
    })
}

clickModalOpenFunction();