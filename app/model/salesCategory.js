module.exports = app => {
    const {
        STRING,
        BOOLEAN
    } = app.Sequelize


    const sales_category = app.model.define('sales_category', {
        name: STRING,
        extend: STRING,
        parent: STRING,
        priority: STRING,
        bindGoods: STRING,
        useBindGoods: BOOLEAN
    })

    return sales_category
}