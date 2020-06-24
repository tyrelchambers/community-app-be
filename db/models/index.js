import sequelize from '../index.js'
import User from './User'
import Page from './Page'
import Post from './Posts'

(async() => {
  sequelize.sync({force: true})
})()

const m = sequelize.models

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

m.User.hasOne(Page, {
  onDelete: "CASCADE"
})

m.Page.hasMany(Post, {
  onDelete: "CASCADE"
})

module.exports = m