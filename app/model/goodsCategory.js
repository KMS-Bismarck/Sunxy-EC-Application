module.exports = app => {
    const {
        STRING,
        BOOLEAN
    } = app.Sequelize


    const goods_category = app.model.define('goods_category', {
        name: STRING,
        extend: STRING,
        parent: STRING,
        priority: STRING,
        bindGoods: STRING,
        useBindGoods: BOOLEAN
    })

    return goods_category
}