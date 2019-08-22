const DbcApi = require('./dbcApi');
const DbUser = require('./dbUsers');
const Mailer = require('./Mailer');

require('dotenv').config();

const db = new DbUser();
const dbc = new DbcApi();
const mail = new Mailer();

function main(){

    dbc.checkBalance()
    .then(res => {
        console.log(res);
    });

    // const msgDef = `Olá, [name]. Saldo atual do Death By Captcha: ${123}`;

    // db.find({}, users => {
    //     if(users.length > 0){
    //         const usersMail = users.filter(el => el.sendMail == true);
    //         console.log(`${usersMail.length} usuários para enviar email.`);
    //         for (let i = 0; i < usersMail.length; i++) {
    //             msg = msgDef.replace("[name]", usersMail[i].name);
    //             mail.sendMail(usersMail[i].email, "Saldo DBC", msg);
    //             console.log(`Mensagem enviada para o usuário ${usersMail[i].name}`);
    //         }
    //     }
    // });
    // mail.sendMail("lfsilva@grupoprazo.adv.br", "teste", "texto teste");
}

main();