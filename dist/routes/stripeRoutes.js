"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const stripe_1 = __importDefault(require("stripe"));
const router = express_1.default.Router();
const stripe = new stripe_1.default('sk_test_51QRZeURxBBzO6509fL9OIbDAE5A4TgTkd0qLc3WP2ICdOuvT7xQ80lRip1BfRZKhzevr9075nVfHUu3wCsSjIVSY00uu3trvxe', {
    apiVersion: '2025-01-27.acacia',
});
router.post('/create-checkout-session', async (req, res) => {
    const { planId, userEmail, successUrl, cancelUrl } = req.body;
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price: planId,
                    quantity: 1,
                },
            ],
            mode: 'subscription',
            customer_email: userEmail,
            success_url: successUrl,
            cancel_url: cancelUrl,
        });
        res.json({ url: session.url });
    }
    catch (error) {
        console.error('Error creating Stripe checkout session:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.default = router;
//# sourceMappingURL=stripeRoutes.js.map