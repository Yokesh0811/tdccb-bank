
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 150,
        modifier: 1,
        slideShadows: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

});
