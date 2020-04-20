'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/default/index', controller.default.home.index);
  router.get('/default/getArticleList', controller.default.home.getArticleList);
  router.get('/default/getArticleById', controller.default.home.getArticleById);
  router.get('/default/getCategories', controller.default.home.getCategories);
  router.get('/default/getTags', controller.default.home.getTags);
  router.get('/default/getArticleByCategory', controller.default.home.getArticleByCategory);
};
