import axios from "axios";

export default axios.create({
  baseURL: "http://tometoyouapi.adamgibbs.dev",
  headers: {
    "Content-type": "application/json",
  },
});
