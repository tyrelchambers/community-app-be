import { DataTypes, Deferrable } from 'sequelize'
import sequelize from '../index.js'
import User from './User'

const Page = sequelize.define("Page", {
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    unique: true
  },
  bannerImage: DataTypes.STRING,
  pageTitle: {
    type: DataTypes.STRING,
    allowNull: false
  },
  facebook: DataTypes.STRING,
  twitter: DataTypes.STRING,
  instagram: DataTypes.STRING,
  applePodcasts: DataTypes.STRING,
  googlePodcasts: DataTypes.STRING,
  stitcher: DataTypes.STRING,
  teespringEnabled: DataTypes.BOOLEAN,
  teespringStore: DataTypes.STRING,
  userId: {
    type: DataTypes.UUID,
    references: {
      model: User,
      key: 'uuid',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  }
})

module.exports = Page