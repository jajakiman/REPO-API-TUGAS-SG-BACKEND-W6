const itemService = require('../services/item.service');

exports.createItem = async (req, res) => {
  try {
    const { name, type, stock, unit } = req.body;
    const result = await itemService.createItem({ name, type, stock, unit });
    res.status(201).json({ status: 'success', message: result });
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message });
  }
};

exports.getAllItems = async (req, res) => {
  try {
    const items = await itemService.getAllItems();
    res.status(200).json({ status: 'success', data: items });
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message });
  }
};

exports.getItemById = async (req, res) => {
  try {
    const item = await itemService.getItemById(req.params.id);
    if (!item) return res.status(404).json({ status: 'error', message: 'Item not found' });
    res.status(200).json({ status: 'success', data: item });
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message });
  }
};

exports.updateItem = async (req, res) => {
  try {
    const result = await itemService.updateItem(req.params.id, req.body);
    res.status(200).json({ status: 'success', message: result });
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const result = await itemService.deleteItem(req.params.id);
    res.status(200).json({ status: 'success', message: result });
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message });
  }
};
