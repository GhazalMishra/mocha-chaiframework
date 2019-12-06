global.chai = require('chai');
global.should = chai.should();
global.expect = chai.expect();
chai.use(require('chai-http'));

global.server='https://jsonplaceholder.typicode.com'
global.agent= chai.request.agent(server);
