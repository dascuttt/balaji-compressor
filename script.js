// Shree Balaji Drilling Compressor - Clean Native Scripts
document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Drawer Toggle
  const menuButton = document.querySelector('[data-testid="mobile-menu-button"]');
  const mobileNav = document.querySelector('[data-testid="main-navigation"]');

  const menuIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu" aria-hidden="true"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>`;
  const closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>`;

  if (menuButton && mobileNav) {
    menuButton.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.innerHTML = isOpen ? closeIcon : menuIcon;
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.innerHTML = menuIcon;
      });
    });
  }

  // Enquiry Form Handler (Direct to WhatsApp)
  const enquiryForm = document.querySelector('[data-testid="enquiry-form"]');
  if (enquiryForm) {
    const phone = "918128719189";
    const whatsapp = `https://wa.me/${phone}`;

    enquiryForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(enquiryForm);

      const message = [
        "नमस्कार, मला Shree Balaji Drilling Compressor ची चौकशी करायची आहे.",
        `नाव: ${data.get("name") || ""}`,
        `मोबाईल: ${data.get("mobile") || ""}`,
        `जिल्हा / ठिकाण: ${data.get("location") || ""}`,
        `सेवा: ${data.get("service") || ""}`,
        `कामाची तारीख: ${data.get("date") || ""}`,
        `अधिक माहिती: ${data.get("message") || "-"}`
      ].join("\n");

      // Show success feedback
      const existingSuccess = enquiryForm.querySelector(".success-message");
      if (existingSuccess) {
        existingSuccess.remove();
      }

      const successEl = document.createElement("p");
      successEl.className = "success-message";
      successEl.setAttribute("data-testid", "enquiry-success-message");
      successEl.textContent = "WhatsApp उघडत आहे — तुमची चौकशी तयार आहे.";
      enquiryForm.appendChild(successEl);

      // Open prefilled WhatsApp message
      window.open(
        `${whatsapp}?text=${encodeURIComponent(message)}`,
        "_blank",
        "noopener,noreferrer"
      );
    });
  }
});
