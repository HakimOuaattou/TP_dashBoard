//==================== Toggle Menu ====================
const toggleMenu = document.querySelector(".toggleMenu");
const aside = document.querySelector(".container .aside");

toggleMenu.addEventListener("click", () => {
	aside.classList.toggle("openAside");
	console.log("Hakim");
});

// ==================== strollToTop ===============

const strollToTop = document.querySelector(".strollToTop");
strollToTop.onclick = () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
};
