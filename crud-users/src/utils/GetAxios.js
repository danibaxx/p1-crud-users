import axios from 'axios';

export default function () {
  return axios.create({
    baseURL: "https://api-project1-dbaxter.herokuapp.com/api"
  })
};