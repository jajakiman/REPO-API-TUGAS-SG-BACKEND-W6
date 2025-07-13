module.exports = (sequelize, DataTypes) => {
  const Supplier = sequelize.define('Supplier', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING
  });
  return Supplier;
};
