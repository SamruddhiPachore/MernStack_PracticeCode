const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from the `.env` file
dotenv.config();

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        // Use Mongoose to connect to MongoDB with options
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useUnifiedTopology: true, // Ensures a stable connection
            useNewUrlParser: true,   // Optional: can be omitted in newer drivers
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`); // Fixed template literal
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
