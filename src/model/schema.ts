import mongoose, { Schema } from "mongoose";

const txSchema = new Schema(
  {
    amount: {
      type: String,
      required: true,
    },
    msisdn: {
      type: String,
      required: true,
    },
    transaction_data: {
      type: String,
      required: true,
    },
    refNumber: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const txModel = mongoose.model("transaction", txSchema);
