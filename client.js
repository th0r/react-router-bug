var React = require('react');
var Router = require('react-router');
var A = require('./components/A.jsx');
var routes = require('./routes.jsx');

var renderHandlerTimeoutId;

Router.run(routes, Router.HistoryLocation, function (Handler, state) {
    console.log('Matched routes for "' + state.path + '" path');
    clearTimeout(renderHandlerTimeoutId);
    renderHandlerTimeoutId = setTimeout(function () {
        console.log('Rendered handler for "' + state.path + '" path');
        React.render(React.createElement(Handler), document.getElementById('app'));
    }, 500);
});