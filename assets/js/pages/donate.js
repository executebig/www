const donateButton = document.getElementById("donateButton");
const coverFeeButton = document.getElementById("coverFee");
const amountField = document.getElementById("amount");
const feeAmount = document.getElementById("fee");
const donateAmount = document.getElementById("total");
const dollarSign = document.getElementById("dollarSign");

const validate = (value) => {
  if (isNaN(value) || value < 0.5 || value > 999999.99) {
    if (value !== "") {
      amountField.classList.add("danger");
      dollarSign.classList.add("danger");
    } else {
      amountField.classList.remove("danger");
      dollarSign.classList.remove("danger");
    }

    donateButton.classList.add("disabled");
    coverFeeButton.classList.add("disabled");

    donateAmount.innerText = "0.00";
    feeAmount.innerText = "0.00";

    return false;
  } else {
    amountField.classList.remove("danger");
    dollarSign.classList.remove("danger");
    donateButton.classList.remove("disabled");
    coverFeeButton.classList.remove("disabled");

    v = parseFloat(value);

    donateAmount.innerText = v.toFixed(2);
    feeAmount.innerText = ((v + 0.3) / (1 - 0.022) - v).toFixed(2);

    return true;
  }
};

amountField.addEventListener("keyup", function () {
  validate(this.value);
});

amountField.addEventListener("change", function () {
  this.value = parseFloat(this.value).toFixed(2);
  validate(this.value);
});

donateButton.addEventListener("click", function () {
  launchDonate(this, amountField.value);
});

coverFeeButton.addEventListener("click", function () {
  launchDonate(
    this,
    parseFloat(amountField.value) + parseFloat(feeAmount.innerText)
  );
});

const launchDonate = (el, amount) => {
  el.innerHTML =
    '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>&ensp;Loading...';
  donateButton.setAttribute("disabled", true);
  donateButton.classList.add("disabled");
  coverFeeButton.setAttribute("disabled", true);
  coverFeeButton.classList.add("disabled");

  fetch("/api/donate", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      host: document.location.origin,
      amount: amount,
    }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (session) {
      return stripe.redirectToCheckout({ sessionId: session.id });
    })
    .then(function (result) {
      if (result.error) {
        alert(result.error.message);
      }
    })
    .catch(function (error) {
      console.error("Error:", error);
    });
};
