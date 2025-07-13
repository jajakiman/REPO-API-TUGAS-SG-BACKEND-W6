const db = require('../models');
const Item = db.Item;

exports.createItem = async ({ name, type, stock, unit }) => {
  if (!name || !type || !unit) throw new Error('name, type, and unit are required');
  const item = await Item.create({ name, type, stock: stock || 0, unit });
  return `Item created: ${item.name}`;
};

exports.getAllItems = async () => {
  return await Item.findAll();
};

exports.getItemById = async (id) => {
  return await Item.findByPk(id);
};

exports.updateItem = async (id, data) => {
  const item = await Item.findByPk(id);
  if (!item) throw new Error('Item not found');
  await item.update(data);
  return 'Item updated';
};

exports.deleteItem = async (id) => {
  const item = await Item.findByPk(id);
  if (!item) throw new Error('Item not found');
  await item.destroy();
  return 'Item deleted';
};
