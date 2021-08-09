module.exports = appInfo => {
    const config = {};
    config.keys = 'wq23ewr'

    config.security = {
        csrf: {
            enable: false
        }
    }
    config.view = {
        defaultViewEngine: 'nunjucks'
    }
    config.cors = {
        origin: "*",
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    }
    config.sequelize = {
        dialect: 'mysql',
        database: 'demo',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '123456',
        timezone: '+08:00'
    }
    config.middleware = ['error']

    return config;
};