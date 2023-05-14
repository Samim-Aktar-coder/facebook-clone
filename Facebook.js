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


