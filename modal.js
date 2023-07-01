const open = document.getElementById('open');
const close = document.getElementById('close');
const modalContainer = document.getElementById('modal-container');
const iconClose = document.getElementById('close-icon');

open.addEventListener('click', function () {
    modalContainer.classList.add("show-modal")
    console.log('Working');
});

close.addEventListener('click', function () {
    modalContainer.classList.remove("show-modal")
});

iconClose.addEventListener('click', function () {
    modalContainer.classList.remove("show-modal")
});

