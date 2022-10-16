const refs = {
  slides: document.querySelectorAll('.slide'),
};

for (const slide of refs.slides) {
  slide.addEventListener('click', () => {
    clearActiveClasses(slide);
    slide.classList.toggle('active');
  });
}

function clearActiveClasses() {
  refs.slides.forEach((slide) => {
    slide.classList.remove('active');
  });
}
