const keys = require('../config/keys')
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin')
const requireJwtAuth = require('../middlewares/requireJwtAuth')

module.exports = app => {
    app.post('/api/stripe', requireLogin, async (req, res) => {
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '5$ for 5 survey credits',
            source: req.body.id
        });
        req.user.credits +=5;
        const user = await req.user.save();
        //send back user to the browser:
        res.send(user); 
    })
}