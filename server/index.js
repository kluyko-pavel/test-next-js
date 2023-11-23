const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/send-email", async (req, res) => {
  const { userName, userPhone } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "kluyko.pasha67@gmail.com",
      pass: "wlos dxqt fgsd alys",
    },
  });

  const message = {
    from: userName,
    to: "kluyko.pasha67@gmail.com",
    subject: "Обратный звонок",
    text: `Имя: ${userName}, Телефон: ${userPhone}`,
  };

  try {
    await transporter.sendMail(message);
    res.status(200).send("Данные успешно отправлены!");
  } catch (error) {
    console.error("Ошибка при отправке email:", error);
    res.status(500).send("Произошла ошибка при отправке данных.");
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
