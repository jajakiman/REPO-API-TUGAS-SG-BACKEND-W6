const stockOutService = require('../services/stockout');

exports.createStockOut = async (req, res) => {
  try {
    const { itemId, quantity, date } = req.body;
    const result = await stockOutService.createStockOut({ itemId, quantity, date });
    res.status(201).json({ status: 'success', message: result });
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message });
  }
};

exports.getAllStockOut = async (req, res) => {
  try {
    const stockouts = await stockOutService.getAllStockOut();
    res.status(200).json({ status: 'success', data: stockouts });
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message });
  }
};

exports.getStockOutById = async (req, res) => {
  try {
    const stockout = await stockOutService.getStockOutById(req.params.id);
    if (!stockout) return res.status(404).json({ status: 'error', message: 'StockOut not found' });
    res.status(200).json({ status: 'success', data: stockout });
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message });
  }
};

exports.updateStockOut = async (req, res) => {
  try {
    const result = await stockOutService.updateStockOut(req.params.id, req.body);
    res.status(200).json({ status: 'success', message: result });
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message });
  }
};

exports.deleteStockOut = async (req, res) => {
  try {
    const result = await stockOutService.deleteStockOut(req.params.id);
    res.status(200).json({ status: 'success', message: result });
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message });
  }
};
