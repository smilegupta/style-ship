const backToTopBtn = document.getElementById("go-back-to-top-btn");

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});