AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({

  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


const contactForm = document.getElementById("contact-form");
const messageInput = document.getElementById("message-input");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents the form from submitting normally

  const message = messageInput.value;
  const email = "sylusooko7@gmail.com";
  const subject = "New message from your portfolio";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

  window.location.href = mailtoLink;

  alert("Message sent!");
  
  messageInput.value = "";
});


