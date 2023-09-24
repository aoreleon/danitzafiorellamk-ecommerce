// Mover pre-next button
const productContainers = document.querySelectorAll('.product-container');
const nxtBtn = document.querySelectorAll('.nxt-btn');
const preBtn = document.querySelectorAll('.pre-btn');

productContainers.forEach((item, i) => {
    const containerWidth = item.getBoundingClientRect().width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollBy({
            left: containerWidth,
            behavior: 'smooth'
        });
    });

    preBtn[i].addEventListener('click', () => {
        item.scrollBy({
            left: -containerWidth,
            behavior: 'smooth'
        });
    });
});