const mongoose = require("mongoose");
require("dotenv").config(); // To load environment variables from a `.env` file

const connectDB = async () => {
  try {
    // Connect to the MongoDB database
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;
