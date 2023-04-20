const { Router } = require('express');
const brandsRouter = Router();
const { brandsController } = require('../controllers');

brandsRouter
  .route('/')
  .post(brandsController.createBrand)
  .get(brandsController.getBrands);

brandsRouter.get('/:brandId/phones', brandsController.getBrandPhones);
brandsRouter.post('/:brandId/phones', brandsController.createBrandPhone);

module.exports = brandsRouter;
