import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term : '' };
    }

    // The render function must be declared whenever you
    // create an new class
    render() {
        // return <input onChange={this.onInputChange}/>;
        return (
            <div>
                <input
                    value={ this.state.term }
                    onChange={event => this.setState({ term : event.target.value })} />
            </div>
        );
    }

    // This is the event handler for our HTML in the
    // in the render() function
    // It must take in a event as an argument
    onInputChange(event) {
        this.setState({ term : event.target.value });
    }
}

export default SearchBar;