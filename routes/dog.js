var express= require('express');
var router= express.Router();
const request= require('request');

router.get('/', async(req, res) =>{
    //dogURI: https://dog.ceo/api/breeds/image/random
 request('https://api.thecatapi.com/v1/images/search', function(error, response, body) {
  if(!error&& response.statusCode== 200) {
   const data= JSON.parse(body);
   res.json(data);
  }
 });
})

module.exports= router;
