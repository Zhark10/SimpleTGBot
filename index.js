// const randomImage = 'https://source.unsplash.com/random';

// bot.sendPhoto(chat_id, randomImage, caption = NULL, disable_notification = FALSE,
// 	reply_to_message_id = NULL, reply_markup = NULL, parse_mode = NULL)

const TelegramBot = require('node-telegram-bot-api');
process.env.NTBA_FIX_319 = 1;

const TOKEN = '1110320719:AAHJ745kgGNuP_S1gZ4-ba7ZsAFIEnGd36M';

const bot = new TelegramBot(TOKEN, {polling: true});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Random message');
});