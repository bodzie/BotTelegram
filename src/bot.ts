require("dotenv").config();
import consola from "consola";

console.log("hello");

const { Telegraf } = require("telegraf");

const botToken = process.env.BOT_TOKEN;

const bot = new Telegraf(botToken);

bot.telegram.getMe().then(consola.info);
Math.random()

consola.info(window)

let startMsg: any;
bot.start((ctx: any) => {
  if (startMsg) bot.telegram.sendCopy(ctx.chat.id, startMsg);
  else ctx.reply("hey there\n\n/set_start");
});

bot.command("set_start", (ctx: any) => {
  const { reply_to_message } = ctx.message;
  if (!reply_to_message) ctx.reply("Reply /set_start on desired start message");

  startMsg = reply_to_message;
});

bot.help((ctx: any) => ctx.reply("Send me a sticker"));
bot.on("sticker", (ctx: any) => ctx.reply("👍"));

bot.launch();

export {};
