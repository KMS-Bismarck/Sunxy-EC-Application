// app/router.js
module.exports = app => {
    const {
        router,
        controller
    } = app;
    router.get('/', app.middleware.checktoken(), controller.home.index);
    router.get('/data', controller.home.getData);
    router.post('/auth/login', controller.auth.login);
    router.post('/auth/logout', controller.auth.logout);
    router.resources('goods', '/goods', controller.goods);
    router.resources('attribute', '/attribute', controller.attribute);
    router.resources('goods_category', '/goods_category', controller.goodsCategory);
    router.resources('sales_category', '/sales_category', controller.salesCategory);
    router.resources('goods_label', '/goods_label', controller.goodsLabel);
};