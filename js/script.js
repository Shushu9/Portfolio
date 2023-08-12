///HAMBURGER

const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close'),
    menuLink = document.querySelectorAll('.menu__link'),
    overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuLink.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
    });
})

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        menu.classList.remove('active');
    }
});




///Modal in contacs section (appear after submitting message)

// const modalTrigger = document.querySelector('.contacts__btn'),
//     modal = document.querySelector('#modal'),
//     modalItem = document.querySelectorAll('.modal__link'),
//     modalCard = document.querySelector('.modal');



// modalTrigger.addEventListener('click', () => {
//     modal.classList.add('modal_active');
// });

// function modalClose() {
//     modal.classList.remove('modal_active');
// }

// modal.addEventListener('click', (e) => {
//     if (e.target === modal) {
//         modalClose();
//     }
// });


// modalItem.forEach(item => {
//     item.addEventListener('click', modalClose);
// });


// document.querySelector('.contacts__form').addEventListener('submit', (event) => {
//     event.preventDefault();
// })




$(document).ready(function () {

    // Smooth scroll and pageup

    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});