const Telegraf = require('telegraf');

const BOT_TOKEN = '472750107:AAGxAMx0agxuxlgxUI_N7Hc-rp8qX6Nd6hY';

const app = new Telegraf(BOT_TOKEN, {username: 'tg_memes_bot'});

app.command('start', ({from, reply}) => {
    console.log('Started!');
    reply('Welcome! 🔍');
});

app.hears(new RegExp(/пидор|пидр|pidor|pidr|гей/i), (ctx) => {
    console.log('Пидор прислал сообщение!');
    ctx.reply('Сам пидор! 🐔');
});

app.hears(/игр*/i, (ctx) => {
    ctx.reply('Кто сказал игры? 🎮');
})

app.startPolling();