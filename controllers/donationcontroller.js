const Razorpay = require("razorpay");
const rzpInstance = new Razorpay({
    key_id: process.env.KEY_ID,
    key_secret: process.env.KEY_SECRET
});

module.exports.sendDonation = function(req,res){
    const name = req.body.name;
    const email = req.body.email;
    
    const amount = req.body.amount;
    const receipt = (Math.random()*0xffffff*10000000000).toString(16).slice(0,6);
    const callbackURL = "/donationthanks";

    // object to store invoice API options
    const invoiceOptions = {
        "type": "invoice",
        "description": "Invoice for test donation",
        "customer": {
            "name": name,
            
            "email": email
        },
        "line_items": [{
            "name": "Donation",
            "description": "Donation cause",
            "amount": amount
        }],
        "date": Math.round(Date.now()/1000),
        "receipt": receipt,
        "callback_method": "get",
        // "callback_url": "http://127.0.0.1:3000/donationthanks"
    }

    // creating a new invoice
    rzpInstance.invoices.create(invoiceOptions, (error, invoice) => {
        if(error) {
            console.log(error);
        } else {
            const invoiceId = invoice.id.toString();
            const orderId = invoice.order_id.toString();
            const customerDetails = {
                "id": invoice.customer_details.id.toString(),
                "name": invoice.customer_details.name.toString(),
                "email": invoice.customer_details.email.toString(),
                
            };
            const amount = invoice.amount.toString();
            const paymentURL = invoice.short_url.toString();
            // const currentDonation = new Donation(invoiceId, orderId, receipt, customerDetails, amount, paymentURL);
            res.json(paymentURL);
        }
    });

}

module.exports.donationthanks = function(req,res) {
    return res.render("english-page/donationthanks");
}