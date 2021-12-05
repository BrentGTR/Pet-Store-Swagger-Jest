var supertest = require('supertest'); 
const request = supertest('https://petstore.swagger.io/v2'); //supertest will hit this API

module.exports = 
{
    request
}