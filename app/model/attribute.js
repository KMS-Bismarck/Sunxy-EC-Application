module.exports = app => {
    const {
        STRING,
        BOOLEAN
    } = app.Sequelize


    const Attribute = app.model.define('attributes', {
        name: STRING,
        code: STRING,
        options: STRING,
        inputMode: STRING,
        allowCustomOptions: BOOLEAN,
    })

    return Attribute
}