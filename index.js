const {
  sequelize,
  Phone,
  Sequelize: { Op },
} = require('./models');


// sequelize
//   .sync({ force: true })
//   .then(() => console.log('Sync OK)'))
//   .catch(e => console.log('e :>> ', e));

// CRUD - create, findAll(findByPk), update / upsert, destroy;

(async () => {
//   const phone = {
//     model: 'iPhone 14X',
//     brand: 'Apple',
//     manufacturedYear: '2022',
//     ramSize: '6',
//     procName: 'Apple Apple',
//     displaySize: 7,
//     nfc: true,
//   };

//   // C - INSERT - create

//   const createdPhone = await Phone.create(phone);
//   console.log('createdPhone :>> ', createdPhone.get());

  // R - SELECT - findAll ------------------------------------------------------------------

  // отримання списку телефонів (* 3-я сторінка при перегляді по 4 телефони на сторінці, упорядкованих за роком виробництва),

  // const foundPhones = await Phone.findAll({
  //   raw: true,
  //   limit: 4,
  //   offset: 9,
  //   order: [
  //     ['manufacturedYear', 'ASC'],
  //   ],
  // });

  //  console.log('foundPhones :>> ', foundPhones);

  // *отримання списку телефонів певного року видання,

  // const foundPhones = await Phone.findAll({
  //   raw: true,
  //   where: { manufacturedYear: 2022 },
  // });

  // console.log('foundPhones :>> ', foundPhones);

  //*отримання списку телефонів старше 2020 року випуску,

  // const foundPhones = await Phone.findAll({
  //   raw: true,
  //   where: { manufacturedYear: { [Op.gt]: 2020 } },
  // });

  // console.log('foundPhones :>> ', foundPhones);

  // U - UPDATE - update

  // const body = { nfc: true };
  // const result = await Phone.update(body, {
  //   raw: true,
  //   where: { manufacturedYear: 2021 },
  //   returning: true,
  // });

  // console.log('result :>> ', result);

  //D - DELETE - destroy
  const deletedPhones = await Phone.destroy({ where: { manufacturedYear: 2010 } });

  console.log('deletedPhones :>> ', deletedPhones);
})();
