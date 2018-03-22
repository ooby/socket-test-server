const config = {
    secret: '$im$alabim',
    limit: 4,
    libs: {
        subtract: d => d[0] - d[1],
        mult: d => d[0] * d[1]
    }
};

const app = require('express')();
const http = require('http').Server(app);
const vidiq = require('vidiq').server(config, http);

const port = 5000;

http.listen(port, e => {
    console.log('Server listening on port', port);
});