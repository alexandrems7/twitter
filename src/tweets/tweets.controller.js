const tweetService = require("./tweets.service");

const createTweetController = async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      res.status(400).send({
        messsage: "envie todos os dados necessário para a criação do tweet ",
      });
    }
    const { id } = await tweetService.createTweetService(message, req.userId);

    return res.send({
      message: "Tweet criado com sucesso",
      tweet: { id, message },
    });
  } catch (err) {
    res.status(500).send({ messsage: err.message });
  }
};

module.exports = { createTweetController };
