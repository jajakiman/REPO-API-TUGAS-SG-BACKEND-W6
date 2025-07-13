module.exports = (sequelize, DataTypes) => {
  const StockOut = sequelize.define('StockOut', {
    itemId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    date: DataTypes.DATE
  });
  return StockOut;
};
