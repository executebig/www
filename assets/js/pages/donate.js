const donateButton = document.getElementById("donateButton");
const amountField = document.getElementById("amount");
const feeAmount = document.getElementById("fee");

const roundTwoDigits = (v) => +(Math.round(v + "e+2") + "e-2");
const calcFee = (v) => v == 0? 0 : roundTwoDigits((v + 0.3) / (1 - 0.022) - v);
const validate = (value) => !isNaN(value) && value >= 5 && value <= 999999.99;
const normalizeAmount = (v) => (v < 5 ? 5.00 : v > 999999.99 ? 999999.99 : v);

amountField.addEventListener("keyup", () => {
  feeAmount.innerText = calcFee(normalizeAmount(Number(amountField.value)));
});

amountField.addEventListener("change", () => {
  amountField.value = normalizeAmount(Number(amountField.value)).toFixed(2);
});

donateButton.onclick = (event) => {
  event.preventDefault();
  const amount = normalizeAmount(Number(amountField.value));
  if (validate(amount)) {
    hcaptcha.execute();
  } else {
    alert("Invalid amount!");
  }
};

var launchDonate = (token) => {
  const coverFee = document.getElementById("coverFee").checked;
  const rawAmount = normalizeAmount(Number(amountField.value));
  const amount = coverFee ? rawAmount + calcFee(rawAmount) : rawAmount;

  console.log(coverFee);
  console.log(rawAmount);
  console.log(amount);

  donateButton.innerHTML =
    '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>&ensp;Loading...';
  donateButton.setAttribute("disabled", true);
  donateButton.classList.add("disabled");

  fetch("/api/donate", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      host: document.location.origin,
      amount,
      token,
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
