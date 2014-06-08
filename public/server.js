var Gateway = require('sapgw'),
    eyes = require('eyes'),
    inspect = eyes.inspector({ maxLength: false });

var flightService = new Gateway({
    username: 'colpaerte',
    password: 'Voetbal92',
    host: 'scvwis0046.dcsc.be:8010',
    service: '/sap/opu/odata/sap/ZGW100_FLIGHTS_SVE_SRV/Flights'
})

function getFlights () {
    flightService.request('FlightCollection', function (flights) {
        inspect(flights);
    });
};

function getFirstFlight () {
    flightService.request('FlightCollection', function (flights) {
        var firstFlight = flights[0];

        flightService.request(firstFlight.id, function (flight) {
            inspect(flight)
        });

    });
};

function getMetadata () {
    flightService.metadata(function (metadata) {
        inspect(metadata)
    })
}

function getCollections () {
    flightService.collections(function (collections) {
        inspect(collections)
    })
}


// Try calling any of these functions :
getFlights();
/*
getCollections();

getMetadata();*/