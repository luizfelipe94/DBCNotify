const axios = require('axios').default;
const FormData = require('form-data');

class DbcApi {
    constructor(username, password){
        this._axios = axios.create({ baseURL: 'http://api.dbcapi.me/api/' });
        this._dbcUsername = username || process.env.DBC_USERNAME;
        this._dbcPassword = password || process.env.DBC_PASSWORD;
    }

    checkBalance(){
        const formData = new FormData();
        formData.append('username', this._dbcUsername);
        formData.append('password', this._dbcPassword);
        return this._axios.post("user", formData)
        .then(res => {
            console.log(res.data);
            return res.data;
        })
        .catch((err) => {
            console.log(err);
            return err;
        });
    }
}

module.exports = DbcApi;