const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const User = require('./models/User'); // ✅ adjust if your model path differs

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("✅ Connected to DB");
  createUser();
}).catch((err) => console.error("❌ DB Error:", err));

// Function to create one user
async function createUser() {
  const hashedPassword = await bcrypt.hash("udit123", 10); // 👈 password
  const user = new User({
    name: "Udit Dev",
    email: "udit@gmail.com", // 👈 login email
    password: hashedPassword,
  });

  try {
    await user.save();
    console.log("✅ User created: udit@gmail.com / udit123");
    mongoose.disconnect();
  } catch (err) {
    console.error("❌ Failed to create user:", err.message);
    mongoose.disconnect();
  }
}
