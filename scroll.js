const background = document.querySelector('.background-image');

window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;
    background.style.transform = `translateY(-${scrollValue / 2}px)`;
});