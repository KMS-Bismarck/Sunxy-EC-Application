const Service = require("egg").Service
const {
    Op
} = require("sequelize");

class SalesService extends Service {
    async index(page = 0, size = 10, query = {}) {
        let PAGE = 0
        let SIZE = 10
        try {
            PAGE = parseInt(page) || 0
            SIZE = parseInt(size) || 10
        } catch (error) {

        }
        const list = await this.app.model.SalesCategory.findAndCountAll({
            where: {
                ...query
            },
            offset: PAGE,
            limit: SIZE
        })
        return list.rows
    }

    async show(id = "") {
        const data = await this.app.model.SalesCategory.findOne({
            where: {
                id: id
            }
        })
        return data || {}
    }

    async create(model, body) {
        const data = {}
        model.map(attr => data[attr] = body[attr] || null)
        await this.app.model.SalesCategory.create(data)
        return data
    }
}

module.exports = SalesService