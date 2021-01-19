const wrapper = document.querySelector('.wrapper');
const image = document.querySelector('.image');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    wrapper.classList.toggle('active');
})