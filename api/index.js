// import fetch from "isomorphic-unfetch";
import { EVE_VERIFY_URL, BACKEND_URL } from '../config/eveApi';

const axios = require('axios');
// const fetch = require("node-fetch");

const fetchCharId = async (authToken) => {
  const options = {
    mode: 'no-cors',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    },
    url: EVE_VERIFY_URL,
  };
  return axios(options)
    .then(response => response.data);
};

const logout = async (authToken) => {
  const options = {
    mode: 'no-cors',
    method: 'DELETE',
    url: `${BACKEND_URL}/tokens/${authToken}`,
  };
  return axios(options).then(response => response.data);
};

export { fetchCharId, logout };
