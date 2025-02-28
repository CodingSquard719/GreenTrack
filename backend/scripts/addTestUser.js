require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/user');

const testUser = {
  name: "John Doe",
  email: "john@example.com",
  password: "123456"
};

async function addTestUser() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    const user = new User(testUser);
    await user.save();
    console.log('Test user added successfully:', user);

  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
  }
}

addTestUser();