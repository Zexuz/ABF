var http = require('http');

var request = require('request-promise');


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});

    getResponseFromABF(req, function (data) {
        console.log(data);
        res.end(data);
    });
}).listen(8080);

console.log("Server is running on port 8080");


function getResponseFromABF(req, callback) {
    request(
        {
            url: "http://api.arbetsformedlingen.se/af/v0/platsannonser/6669299",
            headers: {
                'Accept-Language': 'en-US,en;q=0.8,sv;q=0.6',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }

        })
        .then(function (htmlString) {
            callback(htmlString);
        })
        .catch(function (err) {
            callback(err);
        });
}