let ipUrl = 'http://127.0.0.1:7001/default/' 

let servicePath = {
  getArticleList: ipUrl + 'getArticleList' ,  //  首页文章列表接口
  getArticleById: ipUrl + 'getArticleById/',  // 文章详细页内容接口 ,需要接!收参数
  getCategories: ipUrl + 'getCategories',  // 获取文章分类接口
  getArticleByCategory: ipUrl + 'getArticleByCategory/', //通过分类获取
}

export default servicePath;