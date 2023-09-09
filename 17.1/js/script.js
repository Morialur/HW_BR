
window.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth >= 968) {
        window.addEventListener('scroll', function () {
            const header = document.getElementById('header');

            if (window.scrollY > 884) {
                header.classList.add('sticky');
                element.style.marginTop = '0';
            } else {
                header.classList.remove('sticky');
                element.style.marginTop = '880px';
            }
        });

        window.addEventListener('scroll', function () {
            var element = document.querySelector('.header');
            if (window.scrollY > 884) {
                element.style.marginTop = '0';
            } else {
                element.style.marginTop = '880px';
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    var burger = document.querySelector('.burger');
    var navList = document.querySelector('.nav-list');

    burger.addEventListener('click', function() {
        burger.classList.toggle('active');
        navList.classList.toggle('active');

        // Додали виправлення для виведення меню правильно
        if (navList.classList.contains('active')) {
            document.querySelector('nav').style.right = '0';
        } else {
            document.querySelector('nav').style.right = '-50%';
        }
    });
});
