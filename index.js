const TelegramBot = require('node-telegram-bot-api')

// const TOKEN = '1203488910:AAFzoa784z8aAtHg17mn7iA4nfVum9AiMAk'

// const bot = new TelegramBot(TOKEN, {polling: true})

// bot.on('message', msg => {
//     bot.sendMessage(msg.chat.id, `Hello, ${msg.from.first_name}!`)
// })


var unirest = require("unirest");

var req = unirest("POST", "https://financialtimesmikilior1v1.p.rapidapi.com/getAspectsList");

req.headers({
	"x-rapidapi-host": "FinancialTimesmikilior1V1.p.rapidapi.com",
	"x-rapidapi-key": "29e0404db1msh66a945e13f17ff9p10aadfjsn27f47733b676",
	"content-type": "application/x-www-form-urlencoded",
	"useQueryString": true
});

req.form({});

req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});