require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_API_KEY);
const fetch = require("node-fetch")

export default async (req, res) => {

  fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${req.body.recaptcha}`, {
    method: "POST",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      if (!data.success) {
        res.redirect("/donate/failure")
      } else {
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
      
        return res.status(200).json(session);}
    })

};
