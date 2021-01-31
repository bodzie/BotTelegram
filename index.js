require('dotenv').config()

console.log('hello');
// console.log(require('telegraf'))

const {Telegraf} = require('telegraf')

const botToken = process.env.BOT_TOKEN

const bot = new Telegraf(botToken)

bot.telegram.getMe().then(console.log)

bot.start((ctx) => ctx.reply('hey there'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))

bot.launch()
