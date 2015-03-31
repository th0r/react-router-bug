var React = require('react');
var Router = require('react-router');
var A = require('./components/A.jsx');
var routes = require('./routes.jsx');

var fetchSimulationTimeoutId;
function simulateDataFetching(cb) {
    // Simulation of resetting data fetching for the currently pending route
    clearTimeout(fetchSimulationTimeoutId);
    // Simating data fetching for the current route
    fetchSimulationTimeoutId = setTimeout(cb, 500);
}

Router.run(routes, Router.HistoryLocation, function (Handler, state) {
    console.log('Matched routes for "' + state.path + '" path');
    simulateDataFetching(function () {
        console.log('Got data for "' + state.path + '" and rendering it\'s handler');
        React.render(React.createElement(Handler), document.getElementById('app'));
    });
});