import mongoose from "mongoose";

const protectorSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  maxModelsFit: { type: Number, required: true },
  compatibleBrands: [
    {
      brandName: { type: String, required: true },
      models: { type: [String], required: true },
    },
  ],
});

export default mongoose.models.Protector || mongoose.model("Protector", protectorSchema);
