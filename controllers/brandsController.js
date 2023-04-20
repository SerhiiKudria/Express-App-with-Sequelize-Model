const _ = require('lodash');
const createError = require('http-errors');
const { Brand, Phone } = require('../models');

module.exports.createBrand = async (req, res, next) => {
  // дістати дані з body
  const { body } = req;
  try {
    // спробувати створити нового користувача в БД
    const createdBrand = await Brand.create(body);
    // ок - відправити 200 + створеного користувача
    const preparedBrand = _.omit(createdBrand.get(), [
      'createdAt',
      'updatedAt',
    ]);
    res.status(201).send({ data: preparedBrand });
  } catch (e) {
    // не ок - відправити 4** або 5** + помилку
    next(e);
  }
};

module.exports.getBrands = async (req, res, next) => {
  const { limit = 10, offset = 0 } = req.query;

  try {
    const foundBrands = await Brand.findAll({
      raw: true,
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      limit,
      offset,
      order: ['id'],
    });
    res.status(200).send({ data: foundBrands });
  } catch (e) {
    next(e);
  }
};

module.exports.getBrandPhones = async (req, res, next) => {

  const { brandId } = req.params;

  try {
    const foundBrand = await Brand.findByPk(brandId);

    if (!foundBrand) {
      return next(createError(404, 'Brand Not Found'));
    }

    const foundPhones = await foundBrand.getPhones({
      raw: true,
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    res.status(200).send({ data: foundPhones });
  } catch (e) {
    next(e);
  }
};

module.exports.createBrandPhone = async (req, res, next) => {

  const { brandId } = req.params;
  const { body } = req;

  try {
    const foundBrand = await Brand.findByPk(brandId);

    if (!foundBrand) {
      return next(createError(404, 'Brand Not Found'));
    }

    const createdPhone = await foundBrand.createPhone(body);

    const preparedPhone = _.omit(createdPhone.get(), [
      'createdAt',
      'updatedAt',
    ]);
    res.status(201).send({ data: preparedPhone });

  } catch (e) {
    next(e);
  }
};
