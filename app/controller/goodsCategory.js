const CoreController = require("../core/controller")

class GoodsCategoryController extends CoreController {
    async model() {
        return [
            'attributes',
            'extend',
            'name',
            'parent',
            'priority'
        ]
    }
    async getCore() {
        const path = require('path');
        const core = path.parse(__filename)
        const coreName = core.name
        return coreName
    }
}

module.exports = GoodsCategoryController;