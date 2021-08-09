module.exports = app => {
    const {
        STRING
    } = app.Sequelize


    const goods_category = app.model.define('goods_category', {
        name: STRING,
        attributes: STRING,
        extend: STRING,
        parent: STRING,
        priority: STRING
    })

    return goods_category
}