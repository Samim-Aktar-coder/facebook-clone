//!=========== Sotry & Reel filter ===========

const headerItems = document.querySelectorAll('.header__item');
const storyContent = document.querySelectorAll('.story__content');

const removeActiveItems = () => {
    headerItems.forEach(item => {
        item.classList.remove('active-story-header');
    });
};
const removeShowContent = () => {
    storyContent.forEach(item => {
        item.classList.remove('show-content');
    });
};


headerItems.forEach(item => {
    item.addEventListener('click', () => {
        let id = item.getAttribute('id');
        let itemContent = document.getElementById(`${id}-content`);

        if (item.classList.contains('active-story-header')) {
            return;
        } else {
            removeShowContent();
            removeActiveItems();
            item.classList.add('active-story-header');
            itemContent.classList.add('show-content');
        }
    });
});


//!=========== Change icon with window width ==========

let gamePadIcon = document.querySelector('.gamepad-icon');
let gridMenu = document.querySelector('.grid-menu');

window.addEventListener('resize', () => {
    windowWidth = window.innerWidth;
    if (windowWidth <= 1110) {
        gamePadIcon.classList.replace('ri-gamepad-line', 'ri-menu-line');
        gridMenu.classList.replace('ri-grid-fill', 'ri-add-fill');
    } else {
        gamePadIcon.classList.replace('ri-menu-line', 'ri-gamepad-line');
        gridMenu.classList.replace('ri-add-fill', 'ri-grid-fill');
    }
});