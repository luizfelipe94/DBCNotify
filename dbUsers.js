const db = require('./db');
db.users.loadDatabase();

class DbUser {
    constructor(){
        this._db = db.users;
    }

    save(doc, cb){
        this._db.insert(doc, (err, newDoc) => {
            if(err) cb(err);
            cb(newDoc);
        });
    }

    find(query, cb){
        this._db.find(query, (err, docs) => {
            if(err) cb(err);
            cb(docs);
        });
    }

    findOne(id){
        throw new Error("Método não implementado.");
    }
}

module.exports = DbUser;