const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '463156047:AAEwqrz_Ao9SAqlLfJv2HMcNyRioz5f9J8Y';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {
  polling: true
});

// Matches "/echo [whatever]"
bot.onText(/^Nein|^Nain|^Nayn|^Neyn|^9|^Doch/ig, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content of the message

  const chatId = msg.chat.id;
  var resp = "empty";

  switch (String(match).toLowerCase()) {
    case "nein":
      resp = "Doch!";
      break;
    case "doch":
      resp = "Oh!";
      break;
  }

  bot.sendMessage(chatId, resp);
});

bot.onText(/[^,] +dass|[^ ]dass/ig, (msg, match) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "*, dass");
});

bot.onText(/^penis$/ig, (msg, match) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Adrian approves 😏");
});

// // Listen for any kind of message. There are different kinds of
// // messages.
// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;

//   // send a message to the chat acknowledging receipt of their message
//   bot.sendMessage(chatId, 'Received your message');
// });