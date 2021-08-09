const Service = require("egg").Service
const {
    Op
} = require("sequelize");

class GoodsService extends Service {
    async index(page = 0, size = 10, query = {}) {
        let PAGE = 0
        let SIZE = 10
        try {
            PAGE = parseInt(page) || 0
            SIZE = parseInt(size) || 10
        } catch (error) {

        }
        const goodsList = await this.app.model.Goods.findAndCountAll({
            where: {
                ...query
            },
            offset: PAGE,
            limit: SIZE
        })
        return goodsList.rows
    }

    async show(id = "") {
        const goods = await this.app.model.Goods.findOne({
            where: {
                id: id
            }
        })
        return goods || {}
    }

    async create(model, data) {
        const goods = {}
        model.map(attr => goods[attr] = data[attr] || null)
        await this.app.model.Goods.create(goods)
        return goods
    }
}

module.exports = GoodsService