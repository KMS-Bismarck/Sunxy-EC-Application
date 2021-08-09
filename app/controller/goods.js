const CoreController = require("../core/controller")

class GoodsController extends CoreController {
    async model() {
        return [
            'name',
            'type',
            'createdTime',
            'updatedTime',
            'label',
            'mainImage',
            'status',
            'description',
            'goodsCategory',
            'salesCategory'
        ]
    }
    async getCore() {
        const path = require('path');
        const core = path.parse(__filename)
        const coreName = core.name
        return coreName
    }
}

module.exports = GoodsController;