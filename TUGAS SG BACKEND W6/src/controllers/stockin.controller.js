const stockInService = require('../services/stockin.service');

exports.createStockIn = async (req, res) => {
  try {
    const { itemId, supplierId, quantity, date } = req.body;
    const result = await stockInService.createStockIn({ itemId, supplierId, quantity, date });
    res.status(201).json({ status: 'success', message: result });
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message });
  }
};

exports.getAllStockIn = async (req, res) => {
  try {
    const stockins = await stockInService.getAllStockIn();
    res.status(200).json({ status: 'success', data: stockins });
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message });
  }
};

exports.getStockInById = async (req, res) => {
  try {
    const stockin = await stockInService.getStockInById(req.params.id);
    if (!stockin) return res.status(404).json({ status: 'error', message: 'StockIn not found' });
    res.status(200).json({ status: 'success', data: stockin });
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message });
  }
};

exports.updateStockIn = async (req, res) => {
  try {
    const result = await stockInService.updateStockIn(req.params.id, req.body);
    res.status(200).json({ status: 'success', message: result });
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message });
  }
};

exports.deleteStockIn = async (req, res) => {
  try {
    const result = await stockInService.deleteStockIn(req.params.id);
    res.status(200).json({ status: 'success', message: result });
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message });
  }
};
