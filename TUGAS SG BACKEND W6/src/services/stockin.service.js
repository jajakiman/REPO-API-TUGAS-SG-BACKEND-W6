const db = require('../models');
const StockIn = db.StockIn;

exports.createStockIn = async ({ itemId, supplierId, quantity, date }) => {
  if (!itemId || !supplierId || !quantity || !date) throw new Error('itemId, supplierId, quantity, and date are required');
  const stockin = await StockIn.create({ itemId, supplierId, quantity, date });
  return `StockIn created: ${stockin.id}`;
};

exports.getAllStockIn = async () => {
  return await StockIn.findAll();
};

exports.getStockInById = async (id) => {
  return await StockIn.findByPk(id);
};

exports.updateStockIn = async (id, data) => {
  const stockin = await StockIn.findByPk(id);
  if (!stockin) throw new Error('StockIn not found');
  await stockin.update(data);
  return 'StockIn updated';
};

exports.deleteStockIn = async (id) => {
  const stockin = await StockIn.findByPk(id);
  if (!stockin) throw new Error('StockIn not found');
  await stockin.destroy();
  return 'StockIn deleted';
};
