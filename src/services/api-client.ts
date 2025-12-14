import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fbb4775e15b74845b64431abb24b7f53",
  },
});
