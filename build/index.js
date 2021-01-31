"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
console.log("hello");
var Telegraf = require("telegraf").Telegraf;
var botToken = process.env.BOT_TOKEN;
var bot = new Telegraf(botToken);
bot.telegram.getMe().then(console.log);
var startMsg;
bot.start(function (ctx) {
    if (startMsg)
        bot.telegram.sendCopy(ctx.chat.id, startMsg);
    else
        ctx.reply("hey there\n\n/set_start");
});
bot.command("set_start", function (ctx) {
    var reply_to_message = ctx.message.reply_to_message;
    if (!reply_to_message)
        ctx.reply("Reply /set_start on desired start message");
    startMsg = reply_to_message;
});
bot.help(function (ctx) { return ctx.reply("Send me a sticker"); });
bot.on("sticker", function (ctx) { return ctx.reply("👍"); });
bot.launch();
