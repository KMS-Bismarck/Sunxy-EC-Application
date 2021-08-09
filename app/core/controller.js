const Controller = require('egg').Controller;

class CoreController extends Controller {
    constructor(app) {
        super(app)
    }

    // 列表
    async index() {
        const core = await this.getCore()

        const {
            page,
            size,
            ...query
        } = this.ctx.query
        const list = await this.ctx.service[core].index(page, size, query || {})
        this.ctx.body = list
    }

    // 详情
    async show() {
        const core = await this.getCore()

        const {
            id
        } = this.ctx.params
        const detail = await this.ctx.service[core].show(id)
        this.ctx.body = detail
    }

    // 新增
    async create() {
        const core = await this.getCore()

        const model = await this.model()
        const body = this.ctx.request.body
        const create = await this.ctx.service[core].create(model, body)
        this.ctx.body = create
    }

    // 删除
    async destory() {
        const core = await this.getCore()

        // const id = this.ctx.params.id
        // await this.app.model.Goods.destory({
        //     where: {
        //         id: id
        //     }
        // })
        this.ctx.body = "删除成功！"
    }

    // 更新
    async update() {
        const core = await this.getCore()

        const id = this.ctx.params.id
        // await this.app.model.Goods.update({
        //     name: '啊哈'
        // }, {
        //     where: {
        //         id: id
        //     }
        // })

        this.ctx.body = goodsList
    }
}

module.exports = CoreController