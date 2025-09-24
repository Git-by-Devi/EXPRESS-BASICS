const mongoose = require('mongoose');
async function connectDB() {
  try {
    await mongoose.connect(
       "mongodb+srv://devi:zmnIOEbjCosOUFoE@cluster0.o6kj3mp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log('Connected to MongoDB Atlas');
  } catch{
    console.log('MongoDB connection error');
  }
}
connectDB();
module.exports = mongoose;
