import axios from 'axios'

const axios = require("axios");
const url = 'https://movies-app1.p.rapidapi.com/api/genres'
const options = {
  method: 'GET',
  url: 'https://movies-app1.p.rapidapi.com/api/genres',
  headers: {
    'X-RapidAPI-Key': '8e04728e10msh249cef08be65b66p1ce7f8jsn4e30405e924d',
    'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});