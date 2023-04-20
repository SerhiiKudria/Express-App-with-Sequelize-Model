const { Router } = require('express');
const phonesRouter = Router();
const { phonesController, brandsController } = require('../controllers');

// POST /api/users body
// GET /api/users?limit=10&offset=0 (query)

// GET /api/users/1 (params)
//  /api/users/:userId
// PATCH /api/users/1 body (params)
// PUT /api/users/1 body (params)
// DELETE /api/users/1 (params)
phonesRouter
  .route('/')
  .post(phonesController.createPhone)
  .get(phonesController.getPhones);

phonesRouter
  .route('/:phoneId')
  .get(phonesController.getPhoneById)
  .patch(phonesController.updatePhoneById)
  .put(phonesController.updateOrCreatePhoneById, phonesController.createPhone)
  .delete(phonesController.deletePhoneById);



module.exports = phonesRouter;
