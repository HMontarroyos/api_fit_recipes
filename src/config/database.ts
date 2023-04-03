import mongoose, { ConnectOptions } from "mongoose";

export async function connect() {
  try {
    const options : any = {};
    options.useNewUrlParser = true;
    options.useUnifiedTopology = true;
    await mongoose.connect("mongodb://127.0.0.1:27017/recipes", options);
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error);
  }
}
