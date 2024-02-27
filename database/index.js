const { default: mongoose } = require('mongoose');
const { MONGODB_CONNECTION_STRING } = require('../config');
const connectDatabase = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_CONNECTION_STRING);
    console.log('Database connected successfully');
  } catch (error) {
    console.log(`Error: ${error}`);
    process.exit();
  }
};
module.exports = connectDatabase;
