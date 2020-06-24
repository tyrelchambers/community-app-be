import { DataTypes } from 'sequelize'
import sequelize from '../index.js'

const User = sequelize.define('User', {
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING
  },
  lastName: {
    type: DataTypes.STRING
  },
  username: {
    type: DataTypes.STRING
  },
  facebook: DataTypes.STRING,
  twitter: DataTypes.STRING,
  instagram: DataTypes.STRING
}, {
  timestamps: false
})

module.exports = User