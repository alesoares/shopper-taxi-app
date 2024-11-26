/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';


export const URL = axios.create({
  baseURL: "http://localhost:3000"
});

export default URL;