// Checking validity of login form
document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("#signinForm input");
  const mainFormContainer = document.querySelector(".main-form-container");
  const submitButton = mainFormContainer.querySelector('button[type="submit"]');

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
  });
});

// Opening Forgot Password form
document.addEventListener("DOMContentLoaded", () => {
  const forgotPwd = document.querySelector(".forgot-pwd");
  const forgotPwdContainer = document.querySelector(".forgot-pwd-container");
  const mainFormContainer = document.querySelector(".main-form-container");
  const firstIllustration = document.querySelector(".first-illustration");
  const secondIllustration = document.querySelector(".second-illustration");

  forgotPwd.addEventListener("click", () => {
    mainFormContainer.classList.add("hide");
    mainFormContainer.classList.remove("show");
    forgotPwdContainer.classList.add("show");
    forgotPwdContainer.classList.remove("hide");
    firstIllustration.classList.add("d-none");
    secondIllustration.classList.remove("d-none");
  });
});

// Sending Reset password link and changing form from Forgot PWD to Pwd reset container functionality
document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("#forgotPwdForm input");
  const mainFormContainer = document.querySelector(".main-form-container");
  const forgotPwdContainer = document.querySelector(".forgot-pwd-container");
  const pwdResetContainer = document.querySelector(".pwd-reset-container");
  const resendButton = pwdResetContainer.querySelector("button");
  const forgotPwdForm = document.querySelector("#forgotPwdForm");
  const emailInput = forgotPwdForm.querySelector("input[type='email']");
  const resetMessage = pwdResetContainer.querySelector("p");
  const resendLinkBtn = pwdResetContainer.querySelector("button");
  const submitButton = forgotPwdContainer.querySelector(
    'button[type="submit"]'
  );
  const firstIllustration = document.querySelector(".first-illustration");
  const secondIllustration = document.querySelector(".second-illustration");

  let countdownTimer;

  // Checking forget pwd form validity
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
    if (isFormValid) {
      submitButton.addEventListener("click", (event) => {
        event.preventDefault();
        forgotPwdContainer.classList.add("hide");
        forgotPwdContainer.classList.remove("show");
        pwdResetContainer.classList.add("show");
        pwdResetContainer.classList.remove("hide");
        const email = emailInput.value.trim();

        resetMessage.innerHTML = `We have sent an email to “${email}”<br>with a reset password link.`;

        startCountdown(30);
      });
    }
  });

  // Handle Back Button in forgot pwd container
  forgotPwdContainer
    .querySelector(".back-btn")
    .addEventListener("click", () => {
      forgotPwdContainer.classList.add("hide");
      forgotPwdContainer.classList.remove("show");
      mainFormContainer.classList.add("show");
      mainFormContainer.classList.remove("hide");
      firstIllustration.classList.remove("d-none");
      secondIllustration.classList.add("d-none");
    });

  // Resend the reset pwd link
  resendLinkBtn.addEventListener("click", () => {
    startCountdown(30);
  });

  // Countdown Function
  function startCountdown(seconds) {
    let timeLeft = seconds;

    resendButton.textContent = `Resend in ${timeLeft}s`;
    resendButton.style.pointerEvents = "none";
    resendButton.classList.remove("resend-link-btn");

    clearInterval(countdownTimer);

    countdownTimer = setInterval(() => {
      timeLeft--;
      resendButton.textContent = `Resend in ${timeLeft}s`;

      if (timeLeft <= 0) {
        clearInterval(countdownTimer);
        resendButton.textContent = "Resend";
        resendButton.style.pointerEvents = "";
        resendButton.classList.add("resend-link-btn");
      }
    }, 1000);
  }
});
