require('dotenv').config()
const Payment = require("../models/Payment")
const needle = require("needle");
const csvParser = require("csv-parser");

exports.allPayments = async (req, res) => {
    try {
      const payments = await Payment.find()
      res.status(201).json({
        success: true,
        payments:payments
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

  exports.updatePayment = async (req, res) => {
    try {
      let results = await fetch('https://xlri-live.techlabz.in/xlri-utility/graphql', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: "mutation($formId:String!){exportDynamicFormResponse2(formId: $formId){exportUrl}}",
        variables:{"formId":""}
      })
    })
    let response = await results.json();
    let csvUrl = response?.data?.exportDynamicFormResponse2?.exportUrl
  
    const csvData = [];
    
     needle.get(csvUrl).pipe(csvParser()).on("data", (data) => {
        csvData.push(data);
      }).on("done", async (err) => {
        if (err){
          console.log("An error has occurred");
          return res.status(404).json({ success: false, message: "Can't read CSV File", csvData:csvData});
        } 
        else{
            let count = 0
             for(var i = 0; i< csvData.length ; i++){
              const { Name,Email,amount,paymentStatus} = csvData[i]
              if(Email !== "" && paymentStatus === "true"){
                let user = await Payment.findOne({email:Email});
                  if(!user){
                    await Payment.create({
                      name:Name,
                      email:Email,
                      amount:amount,
                      status:"Success"
                    });
                    count++
                  }
              }
            }
            return res.status(200).json({ success: true, message: "Payment Status Updated Successfully", newEntries:count});
        } 
      });
       
    } catch (error) {
        console.log(error)
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };