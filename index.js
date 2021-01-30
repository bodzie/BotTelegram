console.log('hello');
// console.log(require('telegraf'))

const {Telegraf} = require('telegraf')

const botToken = '1286242213:AAHRRC3Qy15ktw4FYzJs7ytIy0yQuYIHjVw'
const bot = new Telegraf(botToken)

bot.telegram.getMe().then(console.log)

bot.start((ctx) => ctx.reply('hey there'))

bot.launch()
