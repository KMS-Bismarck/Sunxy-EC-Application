module.exports = app => {
    const {
        STRING
    } = app.Sequelize


    const sales_category = app.model.define('sales_category', {
        name: STRING,
        attributes: STRING,
        extend: STRING,
        parent: STRING,
        priority: STRING
    })

    return sales_category
}