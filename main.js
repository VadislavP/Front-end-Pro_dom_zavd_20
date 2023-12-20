// main.js
$(document).ready(() => {
    const $galleryItems = $('.js--gal_item');
    const $modal = $('.js--modal');
    const $modalContent = $('.js--modal__content');
    const $modalClose = $('.js--modal__close');
    const $modalPrev = $('.js--modal__prev');
    const $modalNext = $('.js--modal__next');
    let currentIndex = 0;
    const totalItems = $galleryItems.length;

    const openModal = (index) => {
        currentIndex = index;
        const $currentImage = $galleryItems.eq(index).find('img').attr('src');
        $modalContent.html(`<img src="${$currentImage}" alt="">`);
        $modal.addClass('active');
    };

    $galleryItems.on('click', function () {
        const index = $galleryItems.index($(this));
        openModal(index);
    });

    const closeModal = () => {
        $modal.removeClass('active');
    };

    $modalClose.on('click', closeModal);

    $modalPrev.on('click', () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        const $currentImage = $galleryItems.eq(currentIndex).find('img').attr('src');
        $modalContent.html(`<img src="${$currentImage}" alt="">`);
    });

    $modalNext.on('click', () => {
        currentIndex = (currentIndex + 1) % totalItems;
        const $currentImage = $galleryItems.eq(currentIndex).find('img').attr('src');
        $modalContent.html(`<img src="${$currentImage}" alt="">`);
    });

    $modal.on('click', (e) => {
        if ($(e.target).hasClass('js--modal')) {
            closeModal();
        }
    });

    $(document).on('keyup', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});
