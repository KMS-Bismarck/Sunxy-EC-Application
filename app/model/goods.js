module.exports = app => {
    const {
        STRING
    } = app.Sequelize


    const Goods = app.model.define('goods', {
        name: STRING,
        code: STRING,
        type: STRING,
        label: STRING,
        status: STRING,
        salesCategory: STRING,
        goodsCategory: STRING,
        mainImage: STRING,
        description: STRING,
        createdTime: STRING,
        updatedTime: STRING,
    })

    return Goods
}