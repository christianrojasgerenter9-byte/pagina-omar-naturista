const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("#main-nav");

menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", open);
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(
  (entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  }),
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 4, 3) * 80}ms`;
  observer.observe(element);
});

document.querySelectorAll("[data-product]").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector("#interest").value = link.dataset.product;
  });
});

document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#name").value.trim();
  const interest = document.querySelector("#interest").value;
  const message = document.querySelector("#message").value.trim();
  const text = `Hola Omar, soy ${name}. Me interesa: ${interest}.${message ? ` ${message}` : ""}`;

  const whatsappNumber = "5215578940125";
  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
});

document.querySelector("#year").textContent = new Date().getFullYear();
