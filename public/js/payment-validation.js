document.querySelector("form").addEventListener("submit", validateForm);

// Function to validate form inputs
function validateForm(ev) {
  ev.preventDefault();
  // Get input values
  const fullName = document.querySelector(
    'input[type="text"][placeholder="enter your name"]'
  ).value;
  const email = document.querySelector('input[type="email"]').value;
  const address = document.querySelector(
    'input[type="text"][placeholder="address"]'
  ).value;
  const city = document.querySelector(
    'input[type="text"][placeholder="city name"]'
  ).value;
  const state = document.querySelector(
    'input[type="text"][placeholder="state"]'
  ).value;
  const zipCode = document.querySelector(
    'input[type="number"][placeholder="1234"]'
  ).value;
  const cardName = document.querySelector(
    'input[type="text"][placeholder="name"]'
  ).value;
  const cardNumber = document.querySelector(
    'input[type="number"][placeholder="number"]'
  ).value;
  const expMonth = document.querySelector(
    'input[type="text"][placeholder="month"]'
  ).value;
  const expYear = document.querySelector(
    'input[type="number"][placeholder="year"]'
  ).value;
  const cvv = document.querySelector(
    'input[type="number"][placeholder="1234"]'
  ).value;

  // Validate input values
  if (
    !fullName ||
    fullName.length < 8 ||
    fullName.length > 20 ||
    !/^[a-zA-Z ]+$/.test(fullName)
  ) {
    document.querySelector("body").insertAdjacentHTML(
      "beforebegin",
      `<div class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>Please enter a valid full name (between 8 and 20 alphabets, only alphabets allowed)</strong>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `
      // alert(
      //   "Please enter a valid full name (between 8 and 20 alphabets, only alphabets allowed)"
    );
    return;
  }

  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    document.querySelector("body").insertAdjacentHTML(
      "beforebegin",
      `<div class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>Please enter a valid email address</strong>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `
      // alert("Please enter a valid email address"
    );
    return;
  }

  if (!address) {
    document.querySelector("body").insertAdjacentHTML(
      "beforebegin",
      `<div class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>Please enter your address</strong>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `
      // alert("Please enter your address"
    );
    return;
  }

  if (!city) {
    document.querySelector("body").insertAdjacentHTML(
      "beforebegin",
      `<div class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>Please enter your city</strong>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `
      // alert("Please enter your city"
    );
    return;
  }

  if (!state) {
    document.querySelector("body").insertAdjacentHTML(
      "beforebegin",
      `<div class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>Please enter your state</strong>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `
      // alert("Please enter your state"
    );
    return;
  }

  if (!zipCode || zipCode.length !== 5) {
    document.querySelector("body").insertAdjacentHTML(
      "beforebegin",
      `<div class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>Please enter a valid zip code (5 digits)!</strong>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `
    );
    // alert("Please enter a valid zip code (5 digits)");
    return;
  }

  if (
    !cardName ||
    cardName.length < 8 ||
    cardName.length > 20 ||
    !/^[a-zA-Z ]+$/.test(cardName)
  ) {
    document.querySelector("body").insertAdjacentHTML(
      "beforebegin",
      `<div class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>Please enter a valid name on card (between 8 and 20 alphabets, only alphabets allowed)</strong>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `
      // alert(
      //   "Please enter a valid name on card (between 8 and 20 alphabets, only alphabets allowed)"
    );
    return;
  }

  if (!cardNumber || cardNumber.length !== 16) {
    document.querySelector("body").insertAdjacentHTML(
      "beforebegin",
      `<div class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>Please enter a valid credit card number (16 digits)</strong>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `
      // alert("Please enter a valid credit card number (16 digits)"
    );
    return;
  }

  if (!expMonth) {
    document.querySelector("body").insertAdjacentHTML(
      "beforebegin",
      `<div class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>Please enter the expiration month (5 digits)!</strong>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `
      // alert("Please enter the expiration month"
    );
    return;
  }

  if (!expYear || expYear.length !== 4) {
    document.querySelector("body").insertAdjacentHTML(
      "beforebegin",
      `<div class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>Please enter a valid expiration year (4 digits)</strong>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    `
      // alert("Please enter a valid expiration year (4 digits)"
    );
    return;
  }

  // If all inputs are valid, submit the form
  document.querySelector("form").submit();
}
