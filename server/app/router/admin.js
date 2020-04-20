'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/admin/index', controller.admin.home.index);
  router.post('/admin/login', controller.admin.home.login);
  router.post('/admin/addArticle', controller.admin.home.addArticle);
  router.post('/admin/addCategory', controller.admin.home.addCategory);
  router.post('/admin/deleteCategory', controller.admin.home.deleteCategory);
  router.post('/admin/addTag', controller.admin.home.addTag);
  router.post('/admin/deleteTag', controller.admin.home.deleteTag);
};
