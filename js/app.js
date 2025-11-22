// js/app.js

// Marcar favoritos en las tarjetas
document.querySelectorAll(".deal-card__favorite").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("deal-card__favorite--active");
    btn.textContent = btn.classList.contains("deal-card__favorite--active")
      ? "❤"
      : "♡";
  });
});

// Newsletter ficticio
const newsletterForm = document.querySelector(".newsletter__form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector("input[type='email']").value;
    if (!email) return;
    alert(`¡Gracias! Te enviaremos ofertas a ${email}`);
    newsletterForm.reset();
  });
}
