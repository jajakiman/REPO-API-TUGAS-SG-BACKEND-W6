const db = require('../models');
const StockOut = db.StockOut;

exports.createStockOut = async ({ itemId, quantity, date }) => {
  if (!itemId || !quantity || !date) throw new Error('itemId, quantity, and date are required');
  const stockout = await StockOut.create({ itemId, quantity, date });
  return `StockOut created: ${stockout.id}`;
};

exports.getAllStockOut = async () => {
  return await StockOut.findAll();
};

exports.getStockOutById = async (id) => {
  return await StockOut.findByPk(id);
};

exports.updateStockOut = async (id, data) => {
  const stockout = await StockOut.findByPk(id);
  if (!stockout) throw new Error('StockOut not found');
  await stockout.update(data);
  return 'StockOut updated';
};

exports.deleteStockOut = async (id) => {
  const stockout = await StockOut.findByPk(id);
  if (!stockout) throw new Error('StockOut not found');
  await stockout.destroy();
  return 'StockOut deleted';
};
