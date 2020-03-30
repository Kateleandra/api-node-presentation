const mongoose = require('mongoose');
const Data = mongoose.model("Data");

module.exports = {
    async index(req, res){
        const datas = await Data.find();

        return res.jspn(datas);
    }
}