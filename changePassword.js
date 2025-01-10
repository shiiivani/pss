// Checking validity of change password page
document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("#changePwdForm input");
  const formContainer = document.querySelector(".change-pwd-container");
  const confirmationContainer = document.querySelector(
    ".confirmation-container"
  );
  const submitButton = formContainer.querySelector('button[type="submit"]');
  const passwordInput = document.querySelector(
    '.input-group input[type="password"]'
  );
  const confirmPwdInput = document.querySelector(
    '.confirm-pwd-input input[type="password"]'
  );
  const confirmPwdError = document.querySelector(".confirm-pwd-input .error");

  submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    let isFormValid = true;

    inputs.forEach((input) => {
      const inputGroup = input.closest(".input-group");

      if (input.checkValidity()) {
        inputGroup.classList.remove("invalid");
      } else {
        inputGroup.classList.add("invalid");
        isFormValid = false;
      }
    });

    // Check if passwords match
    if (passwordInput.value !== confirmPwdInput.value) {
      confirmPwdError.classList.remove("d-none");
      confirmPwdInput.closest(".input-group").classList.add("invalid");
      isFormValid = false;
    } else {
      confirmPwdError.classList.add("d-none");
      confirmPwdInput.closest(".input-group").classList.remove("invalid");
    }

    if (isFormValid) {
      formContainer.classList.add("hide");
      formContainer.classList.remove("show");
      confirmationContainer.classList.add("show");
      confirmationContainer.classList.remove("hide");
    }
  });
});

// Toggling password input
document.addEventListener("DOMContentLoaded", () => {
  const inputGroups = document.querySelectorAll(".input-group");

  inputGroups.forEach((group) => {
    const input = group.querySelector("input");
    const eyeClosed = group.querySelector(".eyes-close");
    const eyeOpen = group.querySelector(".eyes-open");

    if (input && eyeClosed && eyeOpen) {
      eyeClosed.addEventListener("click", () => {
        input.type = "text";
        eyeClosed.classList.add("d-none");
        eyeOpen.classList.remove("d-none");
      });

      eyeOpen.addEventListener("click", () => {
        input.type = "password";
        eyeOpen.classList.add("d-none");
        eyeClosed.classList.remove("d-none");
      });
    }
  });
});

// Submitting new password
document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("#changePwdForm input");
  const changePwdContainer = document.querySelector(".change-pwd-container");
  const confirmationContainer = document.querySelector(
    ".confirmation-container"
  );

  // Checking forget pwd form validity
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      const inputGroup = input.closest(".input-group");
      if (input.checkValidity()) {
        inputGroup.classList.remove("invalid");
        // Handle Forgot Password Submit
        changePwdContainer
          .querySelector('button[type="submit"]')
          .addEventListener("click", (event) => {
            event.preventDefault();
          });
      } else {
        inputGroup.classList.add("invalid");
      }
    });
  });
});
