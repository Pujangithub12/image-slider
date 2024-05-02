const nextEl = document.querySelector('.next');
const imageContainerEl = document.querySelector('.image-container')
const imgsEl = document.querySelectorAll("img")
const prevEl = document.querySelector('.prev')

let currentImg = 1;
let timeout;
nextEl.addEventListener("click", nextFunction)
function nextFunction() {
    currentImg++;
    clearTimeout(timeout);
    updateImage();
}
prevEl.addEventListener("click", () => {
    currentImg--;
    clearTimeout(timeout);
    updateImage();
})
function updateImage() {
    if (currentImg > imgsEl.length) {
        currentImg = 1;
    } else if (currentImg < 1) {
        currentImg = imgsEl.length;
    }
    imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
    timeout = setTimeout(() => {
        currentImg++
        updateImage();
    }, 3000)
}