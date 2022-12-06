const { createToken } = require("../../utils/authenticate");
const { addNewUser, getUser } = require("./user.services");

exports.signUpController = async (req, res) => {
  try {
    await addNewUser(req.body);
    let token = createToken(req.body);
    res.send({ token: token });
  } catch (err) {
    res.send(err);
  }
};

exports.loginController = async (req, res) => {
  let result = await getUser(req.body.email, req.body.password);
  let token = createToken({
    email: req.body.email,
    password: req.body.password,
  });
  if (result) {
    res.send(token);
  } else res.send("Email or password is incorrect");
};
