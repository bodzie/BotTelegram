"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const consola_1 = __importDefault(require("consola"));
console.log("hello");
const telegraf_1 = require("telegraf");
const botToken = process.env.BOT_TOKEN;
if (!botToken)
    throw new Error("missing BOT_TOKEN");
const bot = new telegraf_1.Telegraf(botToken);
bot.telegram.getMe().then(consola_1.default.info);
let startMsg;
bot.start((ctx) => {
    if (startMsg)
        bot.telegram.sendCopy(ctx.chat.id, startMsg);
    else
        ctx.reply("hey there\n\n/set_start");
});
bot.command("set_start", (ctx) => {
    const { reply_to_message } = ctx.message;
    if (!reply_to_message)
        ctx.reply("Reply /set_start on desired start message");
    startMsg = reply_to_message;
});
bot.help((ctx) => ctx.reply("Send me a sticker"));
bot.on("sticker", (ctx) => ctx.reply("👍"));
bot.launch();
//# sourceMappingURL=bot.js.map