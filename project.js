// Scroller
let el = document.querySelector(".scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;

  el.style.width = `${(scrollTop / height) * 100}%`;
});

// Contact Forms Elements

let form = document.getElementById("contact-form");
let usernameInput = document.getElementById("username");
let phoneInput = document.getElementById("phone");
let emailInput = document.getElementById("email");
let subjetInput = document.getElementById("subject");
let textAreaInput = document.getElementById("message");
let emailError = document.getElementById("email-error");
let phoneError = document.getElementById("phone-error");

// Prevent Default
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Empty the Errors Text
  emailError.textContent = "";
  phoneError.textContent = "";

  // Check the Validation
  let isValid = true;

  const username = usernameInput.value.trim();
  const phone = phoneInput.value.trim();
  const email = emailInput.value.trim();
  const subject = subjetInput.value.trim();
  const textArea = textAreaInput.value.trim();

  let emailValidate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailValidate.test(email)) {
    emailError.textContent = "Please Enter a Vaild Email";
    isValid = false;
  }

  let phoneValidate = /^\d{11}$/;

  if (!phoneValidate.test(phone)) {
    phoneError.textContent = "Phone Must be 10 digits";
    isValid = false;
  }

  // Put the Forms Data in an object

  if (isValid) {
    let formData = {
      username,
      phone,
      email,
      subject,
      textArea,
    };
    console.log(formData);
  }
   let deleteErrorMsg = [phoneInput, emailError]
    deleteErrorMsg.forEach((input) => {
    input.addEventListener("input", (e) => {
      e.textContent = "";
    });
  });
});

// Create Popup With The Image
let ourImages = document.querySelectorAll(".box img");

ourImages.forEach((img) => {
  img.addEventListener("click", (e) => {
    // Create overlay Element
    let overlay = document.createElement("div");

    // Add Class Name On Overlay
    overlay.className = "popup-overlay";

    // Append Overlay Element To the Body
    document.body.appendChild(overlay);

    // Create the Popup
    let popupBox = document.createElement("div");

    // Add Class Name To Popup Element
    popupBox.className = "popup-box";

    if (img.alt !== null) {
      // Create Heading
      let imgHeading = document.createElement("h3");

      // Create Text For Heading
      let imgText = document.createTextNode(img.alt);

      // Append Text Node To Heading
      imgHeading.appendChild(imgText);

      // Append The Heading To Img Box
      popupBox.appendChild(imgHeading);
    }

    // Create the Image
    let popupImage = document.createElement("img");

    // Set Image Source
    popupImage.src = img.src;

    // Append popupImage To popupBox
    popupBox.appendChild(popupImage);

    // Append popupBox To Body
    document.body.appendChild(popupBox);

    // Create The Close Span
    let closeButton = document.createElement("span");

    // Create The Close Button Text
    let closeText = document.createTextNode("X");

    // Append Text To Close Button
    closeButton.appendChild(closeText);

    // Add Class Name To Close Button
    closeButton.className = "close-button";

    // Append The Close Button To Popup Box
    popupBox.appendChild(closeButton);
  });
});

// Close Popup
document.addEventListener("click", (e) => {
  if (e.target.className == "close-button") {
    // Remove The Current Popup
    e.target.parentNode.remove();

    // Remove overlay
    document.querySelector(".popup-overlay").remove();
  }
});

// To Top Button

let span = document.querySelector(".up");

window.onscroll = function () {
  this.scrollY >= 1000
    ? span.classList.add("show")
    : span.classList.remove("show");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
  });
};

// Toggle Menu
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {
  // Stop Propagation on Toggle Btn
  e.stopPropagation();

  // Toggle Class "menu-active" On Button
  this.classList.toggle("menu-active");

  // Toggle Class "open" On Links
  tLinks.classList.toggle("open");
};

// Click Anywhere outside Menu And Toggle Btn
document.addEventListener("click", (e) => {
  if (e.target !== toggleBtn && e.target !== tLinks) {
    if (tLinks.classList.contains("open")) {
      // Toggle Class "menu-active" On Button
      toggleBtn.classList.toggle("menu-active");
      // Toggle Class "open" On Links
      tLinks.classList.toggle("open");
    }
  }
});

// Stop Propagation on Menu
tLinks.onclick = (e) => {
  e.stopPropagation();
};
