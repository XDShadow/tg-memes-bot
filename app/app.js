const Telegraf = require('telegraf');

const BOT_TOKEN = '472750107:AAGxAMx0agxuxlgxUI_N7Hc-rp8qX6Nd6hY';

const app = new Telegraf(BOT_TOKEN, {username: 'tg_memes_bot'});

app.hears(/прив|hi|hello/, (ctx) => {
    const replies = ['Приветик', 'Здорова!', 'Ееееее, тут кто-то есть!']
    ctx.reply(replies[Math.floor(Math.random() * replies.length)]);
});

app.hears(/пидор|пидр|pidor|pidr|гей/i, (ctx) => {
    const replies = ['Сам пидор! 🐔', 'Ты че, ахуел, пидор?! 🐔', 'Кто пидор? Я не пидор!', 'Че сразу пидор то?']
    ctx.reply(replies[Math.floor(Math.random() * replies.length)]);
});

app.hears(/blya|бля/i, (ctx) => {
    const replies = ['БЛЯХО', 'Блэд!', 'ТЫ ЧЕ БЛЯ']
    ctx.reply(replies[Math.floor(Math.random() * replies.length)]);
});

app.hears(/Kappa/i, (ctx) => {
    ctx.replyWithPhoto('http://i0.kym-cdn.com/photos/images/facebook/000/925/494/218.png_large');
});

app.hears(/игр*/i, (ctx) => {
    ctx.reply('Кто сказал игры? 🎮');
})

app.startPolling();