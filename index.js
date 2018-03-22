const config = {
    secret: '$im$alabim',
    limit: 4,
    libs: {
        subtract: d => d[0] - d[1],
        mult: d => d[0] * d[1]
    }
};
const express = require('express');
const app = express();
const http = require('http').Server(app);
const vidiq = require('vidiq').server(config, http);

app.use(express.static(__dirname + '/web'));

app.get('*', function (req, res) { res.sendFile(__dirname + '/web/index.html'); });

const port = 5000;

http.listen(port, e => {
    console.log('Server listening on port', port);
});