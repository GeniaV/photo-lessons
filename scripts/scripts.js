// Бургерное меню
const menuButton = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.header__burger-menu-container');
const closeMenuButton = document.querySelector('.header__burger-menu-close');

menuButton.addEventListener('click', function () {
    burgerMenu.classList.add('header__burger-menu-container_opened');
});

closeMenuButton.addEventListener('click', function () {
    burgerMenu.classList.remove('header__burger-menu-container_opened');
});

// Форма отправки электронного адреса
const enrollButton = document.querySelector('.enroll-button_type_footer');
const formElement = document.querySelector('.footer__enroll-container');
const emailInput = document.querySelector('.footer__email-input')

function sendEmailForEnroll (evt) {
    evt.preventDefault();
    enrollButton.textContent = 'Спасибо!';
    enrollButton.style.fontWeight = '400';
}

// Жирность кнопки при клике на инпут
emailInput.addEventListener('click', function () {
    enrollButton.style.fontWeight = '500';
});


formElement.addEventListener('submit', sendEmailForEnroll);

// Сборос формы при клике за ее пределы
document.addEventListener( 'click', (e) => {
	const withinBoundaries = e.composedPath().includes(formElement);
	if (!withinBoundaries ) {
	    formElement.reset();
        enrollButton.textContent = enrollButton.value;
	}
});


// Наведение курсоса на кнопку
enrollButton.addEventListener('mouseout', function() {
  enrollButton.style.fontWeight = '400';
})

enrollButton.addEventListener('mouseover', function() {
  enrollButton.style.fontWeight = '500';
})

