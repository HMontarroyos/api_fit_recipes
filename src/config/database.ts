import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect("mongodb://localhost/recipes"/* , {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } */);
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error);
  }
}
