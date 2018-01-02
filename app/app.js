const Telegraf = require('telegraf');
const Markup = Telegraf.Markup;

const BOT_TOKEN = '472750107:AAGxAMx0agxuxlgxUI_N7Hc-rp8qX6Nd6hY';

const app = new Telegraf(BOT_TOKEN, {username: 'tg_memes_bot'});

app.hears(/бот.*(с(а|у)мон.*пид(о|а)р|пид(о|а)р.*с(а|у)мон)/i, (ctx) => {
    ctx.reply('Эй, пидоры! @fansik @HappyKek @SevenFXD @br1ghts1d3 @XDShadow');
});

app.hears(/(прив|hi(\s|$)|hello(\s|$))/i, (ctx) => {
    const replies = ['Приветик', 'Здорова!']
    ctx.reply(replies[Math.floor(Math.random() * replies.length)]);
});

app.hears(/пидор(\s|$)|пидр(\s|$)|pidor(\s|$)|pidr(\s|$)|гей(\s|$)|homo(\s|$)/i, (ctx) => {
    const replies = ['Сам пидор! 🐔', 'Ты че, ахуел, пидор?! 🐔', 'Кто пидор? Я не пидор!', 'Че сразу пидор то?', 'Да, тот еще пидор!']
    ctx.reply(replies[Math.floor(Math.random() * replies.length)]);
});

app.hears(/blya(\s|$)|бля(\s|$)/i, (ctx) => {
    const replies = ['БЛЯХО', 'Блэд!', 'ТЫ ЧЕ БЛЯ', 'БлЯдИнА ЙоБаНаЙа', 'УХХ БЛЭТ']
    ctx.reply(replies[Math.floor(Math.random() * replies.length)]);
});

app.hears(/Kappa(\s|$)/i, (ctx) => {
    ctx.replyWithPhoto('http://i0.kym-cdn.com/photos/images/facebook/000/925/494/218.png_large');
});

app.hears(/BibleThump(\s|$)/i, (ctx) => {
    ctx.replyWithPhoto('https://ih1.redbubble.net/image.195693002.4115/flat,800x800,075,f.jpg');
});

app.hears(/\b(LUL(\s|$)|лул(\s|$))/i, (ctx) => {
    ctx.replyWithPhoto('https://ih0.redbubble.net/image.370068320.4729/flat,800x800,075,f.u2.jpg');
});

app.hears(/OMEGALUL|омегалул/i, (ctx) => {
    ctx.replyWithPhoto('https://ih1.redbubble.net/image.364225796.1573/flat,800x800,075,t.jpg');
});

app.hears(/SIEG(\s|$)|HEIL(\s|$)|ZIG(\s|$)|ЗИГ/i, ctx => {
    ctx.replyWithPhoto('https://i.ytimg.com/vi/R7cgDLJEohg/maxresdefault.jpg');
});

app.hears(/OMEGAADIK/i, ctx => {
    ctx.replyWithPhoto('https://puu.sh/ySPN0/5017b7ec3d.jpg');
});

app.hears(/двоечка|въеби(\s|$)|въебать(\s|$)|базуки(\s|$)|уебать(\s|$)|уеби(\s|$)|dvoechka(\s|$)/i, (ctx) => {
    ctx.replyWithPhoto('https://puu.sh/ySSk4/0c0215c34f.jpg');
});

app.hears(/казах|kazah(\s|$)/i, ctx => {
    ctx.replyWithPhoto('http://puu.sh/ySSpl/a3f908c8ec.jpg');
});

app.hears(/че.*(пацаны|пацаны.*(а|о)ниме)/i, (ctx) => {
    ctx.replyWithPhoto('https://puu.sh/ySUKN/c1ba9b813e.jpg');
})

app.hears(/поц/i, (ctx) => {
    let replies = [
        'http://memesmix.net/media/created/03f9l0.jpg',
        'http://memesmix.net/media/created/m7wpsl.jpg',
        'http://memesmix.net/media/created/3vy74m.jpg',
        'http://memesmix.net/media/created/0n82ig.jpg',
        'http://memesmix.net/media/created/1ysrxw.jpg'
    ]
    ctx.replyWithPhoto(replies[Math.floor(Math.random() * replies.length)]);
});

app.hears(/(\s|^)(ez|изи|рил|ток|real|talk|антихайп)(\s|$)/i, (ctx) => {
    ctx.replyWithPhoto('https://i.ytimg.com/vi/E-r4s7BvmiE/maxresdefault.jpg');
});

app.hears(/(gachi|bass|гачи|басс)(\s|$)/i, (ctx) => {
    ctx.replyWithPhoto('https://yt3.ggpht.com/-hbETsOLQ9Zo/AAAAAAAAAAI/AAAAAAAAAAA/kRAuE3aXj4c/s900-c-k-no-mo-rj-c0xffffff/photo.jpg');
});

app.command('sum', ({reply}) => {
    return reply('Summon pidorasov', 
        Markup
            .keyboard(['@fansik', '@HappyKek', '@SevenFXD', '@br1ghts1d3', '@XDShadow'])
            .oneTime()
            .resize()
            .extra()
    )
});

app.startPolling();
