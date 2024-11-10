'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}


// Updated JavaScript with Formspree integration
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");
const successMessage = document.querySelector('[data-form-message="success"]');
const errorMessage = document.querySelector('[data-form-message="error"]');

// Email validation function
function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(email);
}

// Hide all messages
function hideMessages() {
  successMessage.classList.remove('show');
  errorMessage.classList.remove('show');
}

// Show specific message
function showMessage(type) {
  hideMessages();
  document.querySelector(`[data-form-message="${type}"]`).classList.add('show');
  
  // Hide message after 5 seconds
  setTimeout(() => {
    hideMessages();
  }, 5000);
}

// Input validation
formInputs.forEach(input => {
  input.addEventListener("input", function() {
    // Clear previous messages
    hideMessages();

    // Special validation for email
    if (input.type === 'email' && input.value) {
      if (!isValidEmail(input.value)) {
        input.setCustomValidity('Please enter a valid email address');
      } else {
        input.setCustomValidity('');
      }
    }

    // Enable/disable submit button
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
});

// Form submission
form.addEventListener("submit", async function(e) {
  e.preventDefault();
  
  // Start loading state
  formBtn.classList.add('loading');
  formBtn.setAttribute("disabled", "");
  hideMessages();

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      showMessage('success');
      form.reset();
      formBtn.setAttribute("disabled", "");
    } else {
      throw new Error('Submission failed');
    }
  } catch (error) {
    showMessage('error');
  } finally {
    // End loading state
    formBtn.classList.remove('loading');
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    }
  }
});  

// add event to all form input field
// for (let i = 0; i < formInputs.length; i++) {
//   formInputs[i].addEventListener("input", function () {
//     // check form validation
//     if (form.checkValidity()) {
//       formBtn.removeAttribute("disabled");
//     } else {
//       formBtn.setAttribute("disabled", "");
//     }
//   });
// }

// // Handle form submission
// form.addEventListener("submit", async function (e) {
//   e.preventDefault();
  
//   // Show sending state
//   formBtn.setAttribute("disabled", "");
//   const originalBtnText = formBtn.querySelector("span").textContent;
//   formBtn.querySelector("span").textContent = "Sending...";

//   try {
//     const response = await fetch(form.action, {
//       method: 'POST',
//       body: new FormData(form),
//       headers: {
//         'Accept': 'application/json'
//       }
//     });

//     if (response.ok) {
//       // Success message
//       form.reset();
//       formBtn.setAttribute("disabled", "");
//       alert("Thank you! Your message has been sent successfully.");
//     } else {
//       throw new Error('Form submission failed');
//     }
//   } catch (error) {
//     // Error message
//     alert("Oops! There was a problem sending your message. Please try again.");
//   } finally {
//     // Reset button state
//     formBtn.querySelector("span").textContent = originalBtnText;
//     if (form.checkValidity()) {
//       formBtn.removeAttribute("disabled");
//     }
//   }
// });


// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}