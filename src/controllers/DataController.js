const mongoose = require('mongoose');

const Data = mongoose.model("Data");

module.exports = {
    async index(req, res){
        const datas = await Data.find();

        return res.json(datas);
    },

    async store(req, res){
        const data = await Data.create(req.body);

        return res.json(data);
    }
}