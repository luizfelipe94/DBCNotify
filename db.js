const Datastore = require('nedb');

const db = {};

db.users = new Datastore({filename: `${__dirname}/data/db_users`, autoload: true});

module.exports = db;