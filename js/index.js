var swiper = new Swiper(".News-swiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
  });

document.querySelector('.burger').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.nav-bar').classList.toggle('open');
})
