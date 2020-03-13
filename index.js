const axios = require('axios');
axios.get('http://localhost:3000/todos')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })


 axios.post('http://localhost:3000/todos', {
    content: "Go to market"
  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
