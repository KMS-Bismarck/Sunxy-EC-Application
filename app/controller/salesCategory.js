const CoreController = require("../core/controller")

class SalesCategoryController extends CoreController {
    async model() {
        return [
            'bindGoods',
            'extend',
            'name',
            'parent',
            'priority',
            'useBindGoods'
        ]
    }
    async getCore() {
        const path = require('path');
        const core = path.parse(__filename)
        const coreName = core.name
        return coreName
    }
}

module.exports = SalesCategoryController;