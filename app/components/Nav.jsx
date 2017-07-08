import React from 'react';
import {Link, IndexLink} from 'react-router';

class Nav extends React.Component {

    onSearch(e) {
        e.preventDefault();
        alert('Not yet wired up!');        
    }

    render () {
        const active = {
            activeClassName: 'active',
            activeStyle: {
                fontWeight: 'bold'
            }
        }

        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather App</li>
                        <li>
                            <IndexLink to="/" {...active}>Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link to="/about" {...active}>About</Link>
                        </li>
                        <li>
                            <Link to="/examples" {...active}>Examples</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li><input type="search" placeholder="Search weather" /></li>
                            <li><input type="submit" className="button" value="Get Weather" /></li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
};

module.exports = Nav;