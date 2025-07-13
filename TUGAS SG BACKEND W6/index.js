// 1. Mengimpor modul express
const express = require('express');
const db = require('./models'); // Mengimpor model Sequelize
const app = express();
const userRoutes = require('./routes/user');
const itemRoutes = require('./routes/item');
const supplierRoutes = require('./routes/supplier');
const stockInRoutes = require('./routes/stockIn');
const stockOutRoutes = require('./routes/stockOut');

require('dotenv').config();
// 3. Mendefinisikan port untuk server
// Menggunakan port dari environment variable jika ada, jika tidak, gunakan port 3000
const port = process.env.PORT || 3000;

async function testDbConnection() {
    try {
        await db.sequelize.authenticate();
        console.log('Koneksi ke database berhasil terkoneksi.');
    }  catch (error) {
        console.error('Tidak dapat terhubung ke database:', error);
    }
}
testDbConnection();

// 4. Mendefinisikan route sederhana untuk root URL ('/')
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(express.json()); // Middleware untuk parsing JSON

app.use('/api/users', userRoutes); // Menggunakan rute pengguna pada path '/users'
app.use('/api/items', itemRoutes);
app.use('/api/suppliers', supplierRoutes);
app.use('/api/stock-in', stockInRoutes);
app.use('/api/stock-out', stockOutRoutes);

// 5. Menjalankan server dan mendengarkan koneksi pada port yang ditentukan
app.listen(port, () => {
console.log(`Server berjalan di http://localhost:${port}`);
});