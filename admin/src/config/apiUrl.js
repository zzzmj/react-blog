let adminUrl = 'http://127.0.0.1:7001/admin/'
let defaultUrl = 'http://127.0.0.1:7001/default/'

let apiUrl = {
  checkLogin: adminUrl + 'login' ,  //  检查登录接口,
  addArticle: adminUrl + 'addArticle', // 发布文章

  getCategories: defaultUrl + 'getCategories', // 获取分类列表
  addCategory: adminUrl + 'addCategory', //添加分类
  deleteCategory: adminUrl + 'deleteCategory', //添加分类

  getTags: defaultUrl + 'getTags', // 获取标签列表
  addTag: adminUrl + 'addTag', //添加标签
  deleteTag: adminUrl + 'deleteTag', //添加标签
}

export default apiUrl;