import axios from "axios";
import { mpesa_urls } from "../mpesaurls";
import { config_file } from "../config.env";

export const authToken = async (req: any, res: any, next: any) => {
  const auth = `${config_file.consumer_key}:${config_file.consumer_secret}`;
  const authorization = Buffer.from(auth).toString("base64");
  try {
    axios({
      method: "get",
      url: mpesa_urls.get_credentials,
      headers: {
        Authorization: `Basic ${authorization}`,
      },
    })
      .then((response) => {
        const access_token = response.data.access_token;
        req.token = access_token;
        next();
      })
      .catch((error) => {
        res.status(401).send(error.message);
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};
