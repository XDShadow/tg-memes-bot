const Telegraf = require('telegraf');

const BOT_TOKEN = '472750107:AAGxAMx0agxuxlgxUI_N7Hc-rp8qX6Nd6hY';

const app = new Telegraf(BOT_TOKEN);

app.command('start', ({from, reply}) => {
    console.log('Started!');
    reply('Welcome!');
});
app.hears('пидор', (ctx) => ctx.reply('Сам пидор!'));
app.startPolling();