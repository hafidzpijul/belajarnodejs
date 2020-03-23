const koneksi = require("../configs/db");
module.exports = {
  getAllUser: () => {
    return new Promise((resolve, reject) => {
      koneksi.query("select * from siswa", (error, result) => {
        if (!error) {
          resolve(result);
        } else {
          reject(error);
        }
      });
    });
  }
};
