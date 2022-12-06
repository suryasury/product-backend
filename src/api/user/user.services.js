const { hashPassword, verifyPassword } = require("./authenticate");
const { User } = require("./user.model");
exports.addNewUser = async (user) => {
  const hashedPassword = await hashPassword(user.password);
  user.password = hashedPassword;
  return await new User(user).save();
};

exports.getUser = async (email, password) => {
  let result = await User.findOne({ email }).select("+password");
  if (result && (await verifyPassword(result.password, password))) {
    delete result.password;
    return result;
  } else return null;
};
