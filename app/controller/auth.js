const Controller = require('egg').Controller;

class AuthController extends Controller {
    async login() {
        const {
            ctx
        } = this
        ctx.session = {
            key: 'SUNXY_EC',
            maxAge: 24 * 3600 * 1000, // 1 天
            user: ctx.request.body.username,
            httpOnly: true,
            encrypt: true,
        };
        ctx.body = {
            result:{
                token:'123'
            }
        }
    }
    async logout() {

    }
}

module.exports = AuthController