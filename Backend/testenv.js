require('dotenv').config();

console.log('DB_PASSWORD:', process.env.DB_PASSWORD); // Debería imprimir 1234
console.log('DB_HOST:', process.env.DB_HOST); // Debería imprimir 127.0.0.1
console.log('DB_USER:', process.env.DB_USER); // Debería imprimir postgres
console.log('DB_NAME:', process.env.DB_NAME); // Debería imprimir likeme