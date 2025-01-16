import { connectDB } from "../../../../lib/db.js";
import Protector from "../../../models/Protector.js";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "POST") {
    const { name, maxModelsFit, compatibleBrands } = req.body;

    try {
      if (!name || !maxModelsFit || !compatibleBrands) {
        return res
          .status(400)
          .json({ success: false, message: "All fields are required!" });
      }

      const protector = new Protector({ name, maxModelsFit, compatibleBrands });
      const savedProtector = await protector.save();

      return res.status(201).json({
        success: true,
        message: "Protector saved successfully",
        data: savedProtector,
      });
    } catch (error) {
      console.error("Error saving protector:", error.message);
      return res
        .status(500)
        .json({ success: false, message: "Error saving protector" });
    }
  }

  res.status(405).json({ message: "Method not allowed" });
}
