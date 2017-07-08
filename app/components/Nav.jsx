import React from 'react';
import {Link, IndexLink} from 'react-router';

var Nav = React.createClass({
    render: function() {
        const active = {
            activeClassName: 'active',
            activeStyle: {
                fontWeight: 'bold'
            }
        }

        return (
            <div>
                <h2>NAV</h2>
                <IndexLink to="/" {...active}>Get Weather</IndexLink>
                <Link to="/about" {...active}>About</Link>
                <Link to="/examples" {...active}>Examples</Link>
            </div>
        );
    }
});

module.exports = Nav;