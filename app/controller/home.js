const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const {
      ctx
    } = this
    await ctx.render("index",{fruits:[1,2,3,4]});
  }

  async getData(){
    this.ctx.body='Fa ♂ Q'
  }
}

module.exports = HomeController;