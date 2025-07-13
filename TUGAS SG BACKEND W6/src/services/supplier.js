const db = require('../models');
const Supplier = db.Supplier;

exports.createSupplier = async ({ name, address, phone }) => {
  if (!name || !address || !phone) throw new Error('name, address, and phone are required');
  const supplier = await Supplier.create({ name, address, phone });
  return `Supplier created: ${supplier.name}`;
};

exports.getAllSuppliers = async () => {
  return await Supplier.findAll();
};

exports.getSupplierById = async (id) => {
  return await Supplier.findByPk(id);
};

exports.updateSupplier = async (id, data) => {
  const supplier = await Supplier.findByPk(id);
  if (!supplier) throw new Error('Supplier not found');
  await supplier.update(data);
  return 'Supplier updated';
};

exports.deleteSupplier = async (id) => {
  const supplier = await Supplier.findByPk(id);
  if (!supplier) throw new Error('Supplier not found');
  await supplier.destroy();
  return 'Supplier deleted';
};
