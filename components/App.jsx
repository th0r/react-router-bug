var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    render: function () {
        return (
            <div>
                <ul>
                    <li><Link to="a">To A</Link></li>
                    <li><Link to="b">To B</Link></li>
                </ul>
                <RouteHandler/>
            </div>
        );
    }

});

module.exports = App;