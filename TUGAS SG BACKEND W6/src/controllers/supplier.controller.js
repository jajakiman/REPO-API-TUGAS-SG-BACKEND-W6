const supplierService = require('../services/supplier.service');

exports.createSupplier = async (req, res) => {
  try {
    const { name, address, phone } = req.body;
    const result = await supplierService.createSupplier({ name, address, phone });
    res.status(201).json({ status: 'success', message: result });
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message });
  }
};

exports.getAllSuppliers = async (req, res) => {
  try {
    const suppliers = await supplierService.getAllSuppliers();
    res.status(200).json({ status: 'success', data: suppliers });
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message });
  }
};

exports.getSupplierById = async (req, res) => {
  try {
    const supplier = await supplierService.getSupplierById(req.params.id);
    if (!supplier) return res.status(404).json({ status: 'error', message: 'Supplier not found' });
    res.status(200).json({ status: 'success', data: supplier });
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message });
  }
};

exports.updateSupplier = async (req, res) => {
  try {
    const result = await supplierService.updateSupplier(req.params.id, req.body);
    res.status(200).json({ status: 'success', message: result });
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message });
  }
};

exports.deleteSupplier = async (req, res) => {
  try {
    const result = await supplierService.deleteSupplier(req.params.id);
    res.status(200).json({ status: 'success', message: result });
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message });
  }
};
