function Marquee(selector, speed) {
    const parentSelector = document.querySelector(selector);
    const clone = parentSelector.innerHTML;
    const firstElement = parentSelector.children[0];
    let i = 0;

    parentSelector.insertAdjacentHTML('beforeend', clone);
    parentSelector.insertAdjacentHTML('beforeend', clone);

    setInterval(() => {
        firstElement.style.marginLeft = `-${i}px`;
        if(i > firstElement.offsetWidth) {
            i = 0;
        }
        i += speed;
    }, 0);
}

window.addEventListener('load', Marquee('.marquee', .2));

// on hover add class to item and remove from others

const heroItems = document.querySelectorAll('.hero__item');

heroItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        heroItems.forEach(item => {
            item.classList.remove('hero__item--active');
        });
        item.classList.add('hero__item--active');
    });
} );

