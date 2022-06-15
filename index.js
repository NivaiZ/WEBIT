const modalCloseClickOutside = () => {
    const nav = document.querySelector('.modal');
    const bodySearch = document.querySelector('body');
    window.addEventListener('click', e => {
        const target = e.target;
        bodySearch.classList.toggle('js');
        if (!target.closest('.button-modal__btn') && !target.closest('.modal__inner')) {
            nav.classList.remove('modal-visible');
        }
    })
}

modalCloseClickOutside();

const clickModalOpenFunction = () => {
    const clickButtonModal = document.querySelector('.button-modal__btn');
    const modalVisible = document.querySelector('.modal');
    
    clickButtonModal.addEventListener('click', () => {
        clickButtonModal.classList.toggle('button-modal--opened');
        modalVisible.classList.add('modal-visible');
    })
}

clickModalOpenFunction();