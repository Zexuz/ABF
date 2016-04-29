var http = require('http');

var request = require('request-promise');
var url = require('url');


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});

    //we don't have a icon atm and don't want to log that request
    if (req.url === "/favicon.ico") return;

    //get the query strings as a object
    var queryObject = url.parse(req.url, true).query;

    getResponseFromABF(queryObject, function (data) {
        //write the data as a response
        res.end(data);
    });
}).listen(8080);

console.log("Server is running on port 8080");


function getResponseFromABF(queryObject, callback) {
    //check if we are going to do a id search or term search.
    var searchString = queryObject.annonsid === undefined ? "matchning?nyckelord=" + queryObject.matchingsOrd : queryObject.annonsid;
    console.log("http://api.arbetsformedlingen.se/af/v0/platsannonser/" + searchString);

    //do the request with promises
    request(
        {
            url: "http://api.arbetsformedlingen.se/af/v0/platsannonser/" + searchString,
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
            console.log(err);
            callback(err);
        });
}