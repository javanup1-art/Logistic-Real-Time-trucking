const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'javan1',
  password: 'javan', // اگر رمز عبور پستگرس شما چیزی غیر از admin است، آن را تغییر دهید
  port: 5432,
});

// این بخش برای این است که مطمئن شویم اتصال برقرار شده یا نه
pool.connect((err, client, release) => {
  if (err) {
    return console.error('خطا در اتصال به دیتابیس پستگرس:', err.stack);
  }
  console.log('تبریک! اتصال به دیتابیس logistic_db با موفقیت برقرار شد.');
  release();
});

module.exports = pool;