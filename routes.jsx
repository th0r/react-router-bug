var React = require('react');
var Route = require('react-router').Route;
var App = require('./components/App.jsx');
var A = require('./components/A.jsx');
var B = require('./components/B.jsx');

var routes = (
    <Route path="/" handler={App}>
        <Route name="a" handler={A}/>
        <Route name="b" handler={B}/>
    </Route>
);

module.exports = routes;