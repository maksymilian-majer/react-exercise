import axios from "axios";
import { api_hostname } from "./config";

export default axios.create({
  baseURL: api_hostname
});
