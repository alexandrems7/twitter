const User = require("./User");

const findByEmailUserService = (email) => User.findOne({ email: email });

//cria usuário no body
const createUserService = (body) => User.create(body);

const findAllUserService = () => User.find();


module.exports = { findByEmailUserService, createUserService, findAllUserService };
