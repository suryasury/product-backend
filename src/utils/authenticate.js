const jwt = require("jsonwebtoken");

const createToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const verifyToken = (req, res, next) => {
  try {
    var result = jwt.verify(
      req.get("authorization").substring(7, req.get("authorization").length),
      process.env.JWT_SECRET
    );
    if (result) {
      req.user = result;
      console.log("res", result);
      next();
      return;
    }
    res
      .status(403)
      .send({ status: "failure", message: "Please login to continue" });
  } catch (err) {
    console.log("Err", err);
    res.send({
      message: "invalid token",
      token: req.get("authorization"),
      data: err,
    });
  }
};

module.exports = { createToken, verifyToken };
