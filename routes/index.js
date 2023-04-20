const { Router } = require('express');
const phonesRouter = require('./phonesRouter');
const brandsRouter = require('./brandsRouter');


const router = Router();

router.use('/phones', phonesRouter);
router.use('/brands', brandsRouter);

module.exports = router;
