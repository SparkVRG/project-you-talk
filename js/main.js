'use strict';

function navSubmenuToggle() {
    let button = document.getElementsByClassName('header__nav-item-submenu-list')[0];

    if (button.style.display == 'none') {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
}

function navMobileSubmenuToggle() {
    let button = document.getElementsByClassName('header__nav-mobile-item-submenu-list')[0];

    if (button.style.display == 'none') {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
}

function burgerMenuToggle() {
    let button = document.getElementsByClassName('header__nav-mobile-list')[0];

    if (button.style.display == 'none') {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
}