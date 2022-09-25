import axios from "axios";

export default axios.create({
  baseURL: "https://tometoyouapi.adamgibbs.dev",
  headers: {
    "Content-type": "application/json",
  },
});
