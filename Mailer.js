const nodemailer = require('nodemailer');

class Mailer {
    constructor(){
        this._transporter = nodemailer.createTransport({
            host: 'mail.grupoprazo.adv.br',
            port: '587',
            secure: false,
            tls: { rejectUnauthorized: false }
        });
    }

    async sendMail(to, subject, text){
        const info = await this._transporter.sendMail({
            from: 'lfsilva@grupoprazo.adv.br',
            to,
            subject,
            text
        });
        return info;
    }
}

module.exports = Mailer;