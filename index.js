const CronJob = require('cron').CronJob;
const moment = require('moment');

const DbcApi = require('./dbcApi');
const DbUser = require('./dbUsers');
const Mailer = require('./Mailer');

require('dotenv').config();

const db = new DbUser();
const dbc = new DbcApi();
const mail = new Mailer();

async function main(){

    // dbc.checkBalance()
    // .then(async res => {
    //     const users = await db.find({ sendMail: true });
    //     for (let i = 0; i < users.length; i++) {
    //         Promise.resolve(mail.sendMail(users[i].email, "Saldo DBC", formatMsg(users[i].name, 123)))            
    //     }
    // });

    const users = await db.find({ sendMail: true });
    console.log(`${users.length} usuários para enviar email.`);
    for (let i = 0; i < users.length; i++) {
        Promise.resolve(mail.sendMail(users[i].email, "Saldo DBC", formatMsg(users[i].name, 123)));
        console.log(`Email enviado para o usuario ${users[i].name}`);       
    }

}

const formatMsg = (userName, balance) => {
    let msg = `Olá, [name]. Saldo atual do Death By Captcha: ${balance}`;
    msg = msg.replace("[name]", userName);
    return msg;
}

// 1 vez por dia as 11h
const job = new CronJob('0 11 * * *', async () => {
    main();
    console.log(`\nPróxima execução as ${moment(job.nextDate()).format('HH:mm:ss')}\n`);
}, null, true, 'America/Sao_Paulo');

console.log(`\nPróxima execução as ${moment(job.nextDate()).format('HH:mm:ss')}\n`);