const userModel = require("../models/user");
module.exports = {
  getUser: (req, res) => {
    userModel
      .getAllUser()
      .then(result => {
        res.status(200).json({
          message: "sukses",
          data: result
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
};
