'use strict'
//console.log("OKR")
const userHandler = require('./../handler/userHandler');
module.exports = {
    login:async (req, res) => {
        console.log(req.body)
        let a = await userHandler.login();
        res.json({mes:"OKE",result : a});
    }
}
