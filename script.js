document.addEventListener('DOMContentLoaded', function () {
    let images = [
        {img: "./assets/forniture-image/image1.jpg"},
        {img: "./assets/forniture-image/image2.jpg"},
        {img: "./assets/forniture-image/image3.jpg"},
        {img: "./assets/forniture-image/image4.jpg"},
        {img: "./assets/forniture-image/image5.jpg"},
        {img: "./assets/forniture-image/image6.jpg"},
        {img: "./assets/forniture-image/image7.jpg"},
        {img: "./assets/forniture-image/image8.jpg"},
        {img: "./assets/forniture-image/image9.jpg"},
        {img: "./assets/forniture-image/image10.jpg"},
        {img: "./assets/forniture-image/image11.jpg"},
        {img: "./assets/forniture-image/image12.jpg"},
        {img: "./assets/forniture-image/image13.jpg"},
        {img: "./assets/forniture-image/image14.jpg"},
        {img: "./assets/forniture-image/image15.jpg"},
        {img: "./assets/forniture-image/image16.jpg"},
        {img: "./assets/forniture-image/image17.jpg"},
        {img: "./assets/forniture-image/image18.jpg"},
        {img: "./assets/forniture-image/image19.jpg"},
        {img: "./assets/forniture-image/image20.jpg"},
        {img: "./assets/forniture-image/image21.jpg"},
        {img: "./assets/forniture-image/image22.jpg"},
    ]

    let counter = 0;
    const container = document.querySelector(".slideshow");
    const overlay = document.querySelector(".overlay");
    const gallery_img = document.querySelectorAll(".gallery__img");
    const img_slideshow = document.querySelector(".slideshow__img");

    container.addEventListener('click', function (event) {
        let previous = container.querySelector('.previous');
        let next = container.querySelector('.next');
        let img = container.querySelector('.slideshow__img');
        let tgt = event.target;

        if(tgt == previous) {
            if (counter > 0) {
                img.src = images[counter - 1].img;
                counter--;
            }
        } else if (tgt == next) {
            if (counter < images.length - 1) {
                img.src = images[counter +1].img;
                counter++;
            } else {
                img.src = images[0].img;
                counter = 0;
            }
        }
    })

    Array.from(gallery_img).forEach(img => {
        img.addEventListener('click', event => {
            const imgSelected = parseInt(event.target.dataset.imgShow);
            img_slideshow.src = images[imgSelected].img;
            counter = imgSelected;
            overlay.style.opacity = 1;
            overlay.style.visibility = "visible";
        })
    });

    let closeSlideshow = document.querySelector(".btn_close");
    closeSlideshow.addEventListener('click', () => {
        overlay.style.visibility = "hidden";
        overlay.style.opacity = 0;
    });
})


const button = document.querySelector('.fixed-button');

window.onscroll = function() {
    if (window.pageYOffset > 500) {
        console.log(window.pageYOffset)
        button.classList.add('show-button');
    } else {
        button.classList.remove('show-button')
    }
}