import React, { Component, Fragment } from "react";
import BookFinder from "./BookFinder";


class App extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <Fragment>
                <BookFinder />
            </Fragment>
        );
    }
}

export default App;
