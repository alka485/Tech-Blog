const { Model, DataTypes } = require('sequelize');
//const { DELETE } = require('sequelize/types/query-types');
const sequelize = require('../config/connection');
const User = require('./user');
const Post = require('./post');

class Comment extends Model {}

Comment.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: User,
          key: 'id'
        }
      },
      post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Post,
          key: 'id'
        }
      },
      comment_text: {
        type: DataTypes.STRING,
        allowNull: false,
      }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
  }
);

module.exports = Comment;