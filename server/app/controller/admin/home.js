'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  // 主页接口
  async index() {
    this.ctx.body= 'admin接口可用'
  }

  // 登录
  async login() {
    const { username, password } = this.ctx.request.body
    let result = await this.app.mysql.select("admin_user",{
      where: {
        username,
        password
      }
    })
    
    let success = false
    if (result.length > 0) {
      success = true
    }
    this.ctx.body = {
      success
    }
  }

  // 添加文章接口
  async addArticle() {
    const { ctx, app } = this
    const { 
      articleTitle,
      articleContent,
      articleTime,
      typeId,
      tagId
    } = ctx.request.body

    const result = await app.mysql.insert('article', {
      article_title: articleTitle,
      article_content: articleContent,
      article_time: articleTime,
      type_id: typeId
    })

    const response = {
      success: true
    }

    // 插入文章表数据成功
    if (result.affectedRows === 1) {

      // 建立tag和article的关系
      tagId.map(async (item) => {
        const res = await app.mysql.insert('article_tag', {
          article_id: insertId,
          tag_id: item
        })
        if (res.affectedRows !== 1) {
          response = {
            success: false,
            info: '建立article与tag的关联失败'
          }
        }
      })
    } else {
      response = {
        success: false,
        info: '插入文章数据失败'
      }
    }

    this.ctx.body = response
  }

  // 增加分类
  async addCategory() {
    const { ctx, app } = this
    const { typeName } = ctx.request.body
    let response = {
      success: true,
      info: '插入数据成功'
    }
    if (typeName) {
      const result = await app.mysql.insert('category', {
        type_name: typeName,
        status: 1
      })
      
      if (result.affectedRows !== 1) {
        response = {
          success: false,
          info: '插入数据失败',
          result
        }
      }
    } else {
      response = {
        success: false,
        info: 'typeName未定义'
      }
    }
    this.ctx.body = response
  }

  // 删除分类
  async deleteCategory() {
    const { ctx, app } = this
    const { typeId } = ctx.request.body
    let response = {
      success: true,
      info: '删除成功'
    }

    if (typeId) {
      const row = {
        status: 0,
      };
      // 自定义的id需要指定option
      const options = {
        where: {
          type_id: typeId
        }
      }
      const result = await app.mysql.update('category', row, options)
      
      if (result.affectedRows !== 1) {
        response = {
          success: false,
          info: '删除失败',
          result
        }
      }
    } else {
      response = {
        success: false,
        info: '找不到该Id对应的分类'
      }
    }

    this.ctx.body = response
  }

  // 增加标签
  async addTag() {
    const { ctx, app } = this
    const { tagName } = ctx.request.body
    console.log('json格式的request', ctx.request.body)
    let response = {
      success: true,
      info: '插入数据成功'
    }
    if (tagName) {
      const result = await app.mysql.insert('tag', {
        tag_name: tagName,
        status: 1
      })
      
      if (result.affectedRows !== 1) {
        response = {
          success: false,
          info: '插入数据失败',
          result
        }
      }
    } else {
      response = {
        success: false,
        info: 'tagName未定义'
      }
    }
    this.ctx.body = response
  }

  // 删除标签
  async deleteTag() {
    const { ctx, app } = this
    const { tagId } = ctx.request.body
    let response = {
      success: true,
      info: '删除成功'
    }

    if (tagId) {
      const row = {
        status: 0,
        // modifiedAt: app.mysql.literals.now, // `now()` on db server
      };
      // 自定义的id需要指定option
      const options = {
        where: {
          tag_id: tagId
        }
      }
      const result = await app.mysql.update('tag', row, options)
      
      if (result.affectedRows !== 1) {
        response = {
          success: false,
          info: '删除失败',
          result
        }
      }
    } else {
      response = {
        success: false,
        info: '找不到该Id对应的标签'
      }
    }

    this.ctx.body = response
  }
}

module.exports = HomeController;
