const Telegraf = require('telegraf');

const BOT_TOKEN = '472750107:AAGxAMx0agxuxlgxUI_N7Hc-rp8qX6Nd6hY';

const app = new Telegraf(BOT_TOKEN, {username: 'tg_memes_bot'});

app.command('start', (ctx) => {
    let timer = setInterval(() => {
        ctx.reply('/pidor@SublimeBot');
        ctx.reply('/spin@spin_everyday_bot');
    }, 5000);
});

app.hears(/прив|hi|hello/i, (ctx) => {
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

app.hears(/BibleThump/i, (ctx) => {
    ctx.replyWithPhoto('https://ih1.redbubble.net/image.195693002.4115/flat,800x800,075,f.jpg');
});

app.hears(/\sLUL|\sлул/i, (ctx) => {
    ctx.replyWithPhoto('https://ih0.redbubble.net/image.370068320.4729/flat,800x800,075,f.u2.jpg');
});

app.hears(/OMEGALUL|омегалул/i, (ctx) => {
    ctx.replyWithPhoto('https://ih1.redbubble.net/image.364225796.1573/flat,800x800,075,t.jpg');
});

app.hears(/поц/i, (ctx) => {
    let replies = [
        'http://memesmix.net/media/created/03f9l0.jpg',
        'http://memesmix.net/media/created/m7wpsl.jpg',
        'http://memesmix.net/media/created/3vy74m.jpg',
        'http://memesmix.net/media/created/0n82ig.jpg',
        'http://memesmix.net/media/created/1ysrxw.jpg'
    ]
    ctx.replyWithPhoto();
})

app.hears(/игр*/i, (ctx) => {
    ctx.reply('Кто сказал игры? 🎮');
})

app.startPolling();