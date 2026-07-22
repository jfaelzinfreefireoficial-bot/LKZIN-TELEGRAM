const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: process.env.NODE_ENV !== 'production' });

// Comandos
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, `Eai Faelzin! Bot rodando perfeito no Render! 😎🔥`);
});

bot.onText(/\/ping/, (msg) => {
  bot.sendMessage(msg.chat.id, `Pong! 🏓 Tudo certo!`);
});

// Webhook para Render
if (process.env.NODE_ENV === 'production') {
  bot.setWebHook(process.env.RENDER_EXTERNAL_URL + '/' + token);
}

console.log('🤖 Bot rodando!');