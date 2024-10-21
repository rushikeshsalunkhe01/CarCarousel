const images = [
    {
        src: "img/car1.jpg",
        caption: "Sleek Red Sports Car"
    },
    {
        src: "img/car2.jpg",
        caption: "Luxury Black Sedan"
    },
    {
        src: "img/car3.jpg",
        caption: "Convertible White Roadster"
    },
    {
        src: "img/car4.jpg",
        caption: "Blue Off-Road SUV"
    },
    {
        src: "img/car5.jpg",
        caption: "Classic Yellow Muscle Car"
    }
];

let index = 0;

const slide = document.getElementById("slide");
const caption = document.getElementById("caption");

function showSlide() {
    slide.src = images[index].src;
    caption.innerText = images[index].caption;
}

function nextSlide() {
    index = (index + 1) % images.length;
    showSlide();
}

function prevSlide() {
    index = (index - 1 + images.length) % images.length;
    showSlide();
}

function setSlide(slideIndex) {
    index = slideIndex;
    showSlide();
}
