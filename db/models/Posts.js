import { DataTypes, Deferrable } from 'sequelize'
import sequelize from '../index.js'
import Page from './Page'

const Post = sequelize.define("Post", {
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    unique: true
  },
  likes: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  dislikes: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  messages: {
    type: DataTypes.STRING
  },
  pageId: {
    type: DataTypes.UUID,
    references: {
      model: Page,
      key: 'uuid',
      deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
  }
}, {
  timestamps: false
})

module.exports = Post