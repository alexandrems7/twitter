const userService = require("./user.service")

const findByEmailUserService = require("./user.service");

const createUserController = async (req, res) => {
  const { name, username, email, password, avatar } = req.body;

  if (!username || !name || !email || !password || !avatar) {
    return res.status(400).send({
      message:
        "Alguns campos estão faltando. Os campos são: 'username', 'name', 'email', 'password', 'avatar'.",
    });
  }

  const foundUser = await userService.findByEmailUserService(email);

  //se o usuario existir, ele barra a crição
  if (foundUser) {
    return res.status(400).send({
      message: "Usuário já existe!",
    });
  }

  //caso o email exista, ele cria um novo
  const user = await userService
    .createUserService(req.body)
    .catch((err) => console.log(err.message));

  if (!user) {
    return res.status(400).send({
      message: "Erro ao criar Usuário!",
    });
  }

  res.status(201).send(user);
};

const findAllUserController = async (req, res) => {
  res.send({ message: "Find All OK" });
};

module.exports = { createUserController, findAllUserController };
