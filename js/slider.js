document.querySelectorAll("[data-slider]").forEach((slider) => {
  const slides = slider.querySelectorAll(".slide");
  const thumbs = slider.parentElement.querySelectorAll(".thumb");
  let index = 0;

  const show = (i) => {
    slides.forEach((s) => s.classList.remove("active"));
    thumbs.forEach((t) => t.classList.remove("active"));
    slides[i].classList.add("active");
    thumbs[i].classList.add("active");
    index = i;
  };

  slider.querySelector(".next").onclick = () =>
    show((index + 1) % slides.length);

  slider.querySelector(".prev").onclick = () =>
    show((index - 1 + slides.length) % slides.length);

  thumbs.forEach((t, i) => (t.onclick = () => show(i)));
});
