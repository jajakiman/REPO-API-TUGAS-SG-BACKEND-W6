// 1. Mengimpor modul express
const express = require('express');
const db = require('./src/models'); // Mengimpor model Sequelize dari folder yang benar
const app = express();
const userRoutes = require('./src/routes/user.routes');
const itemRoutes = require('./src/routes/item.routes');
const supplierRoutes = require('./src/routes/supplier.routes');
const stockInRoutes = require('./src/routes/stockIn.routes');
const stockOutRoutes = require('./src/routes/stockOut.routes');
const morgan = require('morgan');

require('dotenv').config();
// 3. Mendefinisikan port untuk server

const authRoutes = require('./src/routes/auth.routes');

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

const simpleLogger = (req, res, next) => {
    console.log(` ${req.method} ${req.originalUrl}`);
next();
};


app.use(express.json()); // Middleware untuk parsing JSON
app.use(morgan("dev")); // Middleware untuk logging HTTP requests
app.use(express.urlencoded({ extended: true })); // Middleware untuk parsing URL-encoded data

app.use('/api/users', userRoutes); // Menggunakan rute pengguna pada path '/users'
app.use('/api/items', itemRoutes);
app.use('/api/suppliers', supplierRoutes);
app.use('/api/stock-in', stockInRoutes);
app.use('/api/stock-out', stockOutRoutes);

// 5. Menjalankan server dan mendengarkan koneksi pada port yang ditentukan
app.listen(port, () => {
console.log(`Server berjalan di http://localhost:${port}`);
});