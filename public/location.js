//code from 
// http://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1);  // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}

function getUserLocation(succsess, error) { //callback is a function and has a parameter that is the position
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(succsess, error);
        /*
         navigator.geolocation.getCurrentPosition(function (pos) {
         console.log(position.coords.latitude);
         console.log(position.coords.longitude);
         });
         */
    } else {
        alert("Din webbläsare stöder inte geoposition.");
    }
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
        default:
            alert("Something went wrong, try again.");
    }
}

function isPositionClose(workLat, workLong, diameterMax, callback) {

    getUserLocation(function (pos) {
        console.log(getDistanceFromLatLonInKm(workLat, workLong, pos.coords.latitude, pos.coords.longitude) <= diameterMax);
        if (getDistanceFromLatLonInKm(workLat, workLong, pos.coords.latitude, pos.coords.longitude) <= diameterMax) {
            return callback(true)
        }
        callback(false);

    }, showError.bind(this));


}

var geocoder;
function initGeocode() {
    geocoder = new google.maps.Geocoder();
}
/*
function geocodeAddress(address, callback) {
    alert(address);
    geocoder.geocode({'address': address}, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            console.log(results);
            console.log(results[0].formatted_address);

            isPositionClose(results[0].geometry.location.lat(), results[0].geometry.location.lng(), 50, function (isTrue) {
                callback(isTrue);
            });
        } else {
            console.log('Geocode was not successful for the following reason: ' + status);
        }
    });
}
*/
function findPlaceNewAPI(address, callback) {
    $.ajax({
        url: "http://www.mapquestapi.com/geocoding/v1/address?key=n3L3dC7uCvWVdL63841lo6yHkW34H049&location=" + address + ",Karlstad,Värmland",
        jsonp: "callback",
        dataType: "json",
        success: function (response) {
            isPositionClose(response.results[0].locations[0].latLng.lat, response.results[0].locations[0].latLng.lng, 50, function (isTrue) {
                callback(isTrue);
            });
        }
    });
}

/*
function findAllPlaces(locations, callback) {

    var query = "";
    for (var i = 0; i < locations.length; i++) {
        query += "&location=" + locations[i];
    }

    $.ajax({
        url: "https://www.mapquestapi.com/geocoding/v1/batch?key=n3L3dC7uCvWVdL63841lo6yHkW34H049" + query,
        jsonp: "callback",
        dataType: "json",
        success: function (response) {
            isPositionClose(response.results[0].locations[0].latLng.lat, response.results[0].locations[0].latLng.lng, 50, function (isTrue) {
                callback(isTrue);
            });
        }
    });
}
*/

//findPlaceNewAPI("Hemvägen 3c, Karlstad,Sweden");


/*
 Exempel på hur koden kan användas

 isPositionClose(59.324244, 14.501477, 50, function (isTrue) {
 console.log(isTrue);
 if (isTrue) {
 alert("nära")
 } else {
 alert("not close")
 }
 });



 */
