const assert = require('chai').assert;
const dbUser = require('../dbUsers');

describe('Usuários', function(){
    it('Cadastro de um usuário', function(){
        const db = new dbUser();
        const user = {
            name: "Luiz Felipe1",
            email: "lfsilva1@grupoprazo.adv.br",
            sendMail: false
        };
        db.save(user, res => {
            assert.hasAllKeys(res, ['sendMail', 'name', 'email', '_id']);
        });
    });
    it('Pesquisar todos os usuários', function(){
        const db = new dbUser();
        db.find({}, res => {
            console.log(JSON.stringify(res, null, 4));
            assert.isArray(res);
        });
    });
});