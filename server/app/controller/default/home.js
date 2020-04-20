'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  // 主页接口
  async index() {
    let result = await this.app.mysql.get("blog_content",{})
    console.log(result)
    this.ctx.body=result
  }

  // 获取文章列表接口
  async getArticleList() {
    const { ctx, app } = this
    let result = await app.mysql.select('article')
    console.log(ctx.request)
    this.ctx.body = result
  }

  // 根据文章ID查找文章
  async getArticleById() {
    const { ctx, app } = this
    const { id } = ctx.query

    let result = await app.mysql.get('article', { article_id: id })    
    this.ctx.body = result
  }

  // 获取文章分类接口
  async getCategories() {
    const { app } = this
    let result = await app.mysql.select('category', {
      where: {
        status: 1
      }
    })
    this.ctx.body = result
  }

  // 获取所有标签
  async getTags() {
    const { app } = this
    let result = await app.mysql.select('tag', {
      where: {
        status: 1
      }
    })
    this.ctx.body = result
  }

  // 根据文章分类查找文章
  async getArticleByCategory() {
    const { ctx, app } = this
    const { type } = ctx.query
    let result = await app.mysql.select('article', {
      where: {
        type_id: type
      }
    })
    this.ctx.body = result
  }
}

module.exports = HomeController;
