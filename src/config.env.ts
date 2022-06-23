require("dotenv").config();

export const config_file = {
  mongo_uri: process.env.MONGO_URI!,
  port: process.env.PORT,
  consumer_secret: process.env.CONSUMER_SECRET!,
  consumer_key: process.env.CONSUMER_KEY!,
  short_code: 174379,
  passkey: process.env.PASSKEY,
  phone_number: process.env.PHONE_NUMBER,
};
