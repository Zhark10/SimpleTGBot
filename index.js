const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '1203488910:AAFzoa784z8aAtHg17mn7iA4nfVum9AiMAk'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `Hello, ${msg.from.first_name}!`)
})
