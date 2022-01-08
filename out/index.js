"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
var telegraf_1 = require("telegraf");
var bot = new telegraf_1.Telegraf(process.env.BOT_TOKEN);
bot.start(function (ctx) { return ctx.reply("Welcome"); });
bot.help(function (ctx) { return ctx.reply("Send me a sticker"); });
bot.on("sticker", function (ctx) { return ctx.reply("👍"); });
bot.hears("hi", function (ctx) { return ctx.reply("Hey there"); });
bot.launch();
// Enable graceful stop
process.once("SIGINT", function () { return bot.stop("SIGINT"); });
process.once("SIGTERM", function () { return bot.stop("SIGTERM"); });
//# sourceMappingURL=index.js.map