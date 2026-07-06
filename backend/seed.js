const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('./model/User');
const Product = require('./model/Product');
const connectDB = require('./config/db');
const products = require('./data/product');

dotenv.config();

connectDB();

const importData = async () => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('password123', salt);

    await User.findOneAndUpdate(
      { email: 'admin@shoppy.com' },
      {
        name: 'Admin User',
        email: 'admin@shoppy.com',
        password: hashedPassword,
        role: 'admin',
      },
      { upsert: true, returnDocument: 'after', setDefaultsOnInsert: true }
    );

    await Product.bulkWrite(products.map((product) => {
      return {
        updateOne: {
          filter: { name: product.name },
          update: { $set: product },
          upsert: true,
        },
      };
    }));

    const productCount = await Product.countDocuments();

    console.log(`Data imported successfully! Product count: ${productCount}`);
    console.log('Admin login: admin@shoppy.com / password123');
    process.exit();
  } catch (error) {
    console.error(`Error with data import: ${error.message}`);
    process.exit(1);
  }
};

importData();
