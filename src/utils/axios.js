import axios from 'axios';

const instance = axios.create({
  baseUrl: process.env.REACT_APP_URL
});


export default instance;