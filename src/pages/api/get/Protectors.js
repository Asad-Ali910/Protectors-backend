import { connectDB } from "../../../../lib/db";
import Protector from "../../../models/Protector";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    try {
      const protectors = await Protector.find();
      return res.status(200).json({ success: true, data: protectors });
    } catch (error) {
      console.error("Error fetching protectors:", error.message);
      return res.status(500).json({ success: false, message: "Error fetching protectors" });
    }
  }

  res.status(405).json({ message: "Method not allowed" });
}
