import mongoose, { ConnectOptions } from "mongoose";
import { config as dotenvConfig } from 'dotenv';
dotenvConfig();

export async function connect() {
  const baseUrlHML = "mongodb://127.0.0.1:27017/recipes"
  const baseUrlPROD = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER_URL}/${process.env.MONGODB_DATABASE}`
  try {
    const options: any = {};
    options.useNewUrlParser = true;
    options.useUnifiedTopology = true;
    await mongoose.connect(baseUrlPROD, options);
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error);
  }
}

export async function closeDatabase() {
  await mongoose.connection.close();
}
