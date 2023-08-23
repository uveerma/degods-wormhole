import axios from "axios";

const simpleHashAxiosClient = axios.create({
  baseURL: "https://api.simplehash.com",
  headers: {
    "Content-Type": "application/json",
    "X-API-KEY": process.env.NEXT_PUBLIC_SIMPLEHASH_KEY,
  },
});

export { simpleHashAxiosClient };
