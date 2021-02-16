require("dotenv").config();
const { verify } = require("hcaptcha");
const stripe = require("stripe")(process.env.STRIPE_API_KEY);
const secret = process.env.HCAPTCHA_SECRET;
export default (req, res) => {
  const amount = req.body.amount;
  const host = req.body.host;

  verify(secret, req.body.token)
  .then(async (data) => {
    if (data.success) {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            name: "Donate to Execute Big",
            description: "Your contribution is tax-deductible.",
            amount: amount * 100, // Cents
            currency: "usd",
            quantity: 1,
          },
        ],
        success_url: host + "/donate/success/?session_id={CHECKOUT_SESSION_ID}",
        cancel_url: host + "/donate/",
      });

      return res.status(200).json(session);
    } else {
      return res.status(500);
    }
  })
  .catch(console.error);
};
