const CoreController = require("../core/controller")

class AttributeController extends CoreController {
    async model() {
        return [
            'name',
            'code',
            'options',
            'inputMode',
            'allowCustomOptions'
        ]
    }
    async getCore() {
        const path = require('path');
        const core = path.parse(__filename)
        const coreName = core.name
        return coreName
    }
}

module.exports = AttributeController;