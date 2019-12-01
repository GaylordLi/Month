'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async Gettotallist() {
    const result = await this.app.mysql.select("monthshoplist")//获取数据库数据
    this.ctx.body = {//返回结果
      meg: "success",
      result
    };
  }
}

module.exports = HomeController;
