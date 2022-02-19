import axios from 'axios'

const options = {
  method: "GET",
  url: "https://imdb8.p.rapidapi.com/auto-complete",
  params: { q: "" },
  headers: {
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    "x-rapidapi-key": "ac94769f0fmshd332d0cda433fecp1da03cjsn701d001d9a1f",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });