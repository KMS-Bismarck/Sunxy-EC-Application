const CoreController = require("../core/controller")

class GoodsLabelController extends CoreController {
    async model() {
        return [
            'code',
            'name',
        ]
    }
    async getCore() {
        const path = require('path');
        const core = path.parse(__filename)
        const coreName = core.name
        return coreName
    }
}

module.exports = GoodsLabelController;