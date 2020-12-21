require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_API_KEY);

export default async (req, res) => {
  const amount = req.body.amount
  const host = req.body.host

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
};
