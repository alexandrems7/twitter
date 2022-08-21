const authService = require("./auth.service");
const bcrypt = require("bcryptjs");
const loginController = async (req, res) => {
  const { email, password } = req.body;

  const user = await authService.loginService(email);

  if (!user) {
    res.status(400).send({ message: "usuario não encontrado." });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);


  if(!isPasswordValid){
    return res.status(400).send({message: "Senha inválida!"});
  }


  console.log(isPasswordValid);

  res.send(user);
};

module.exports = { loginController };
