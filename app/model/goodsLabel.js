module.exports = app => {
    const {
        STRING
    } = app.Sequelize


    const goods_label = app.model.define('goods_label', {
        name: STRING,
        code: STRING,
    })

    return goods_label
}