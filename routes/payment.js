const express = require("express");

const {
    updatePayment,
    allPayments
} = require("../controllers/payment");

const router = express.Router();

router.route("/payment/allPayments").get(allPayments);
router.route("/payment/updateStatus").get(updatePayment);

module.exports = router;