import sequelize from '../index.js'

(async() => {
  sequelize.sync()
})()


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const m = sequelize.models