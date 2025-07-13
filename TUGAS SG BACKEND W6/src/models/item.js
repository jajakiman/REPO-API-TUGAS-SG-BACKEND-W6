module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    unit: DataTypes.STRING
  });
  return Item;
};
