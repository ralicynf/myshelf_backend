'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookReport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      BookReport.belongsTo(models.User, {foreignKey: 'userId'})
      BookReport.belongsTo(models.Book, {foreignKey: 'bookId'})
    }
  }
  BookReport.init({
    review: {type: DataTypes.STRING, allowNull: false},
    rating: DataTypes.INTEGER,
    readAgain: DataTypes.BOOLEAN,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    },
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'books',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'BookReport',
    tableName: 'book_reports'
  });
  return BookReport;
};