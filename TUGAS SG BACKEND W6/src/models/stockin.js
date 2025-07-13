module.exports = (sequelize, DataTypes) => {
  const StockIn = sequelize.define('StockIn', {
    itemId: DataTypes.INTEGER,
    supplierId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    date: DataTypes.DATE
  });
  return StockIn;
};
