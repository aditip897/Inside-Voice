import React, { Component } from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { render } from "react-dom";

class Home extends Component {
    render() {
        return (
            <div>
                <p>Welcome to InsideVoice!</p>
                <p>Scroll down to begin your video call.</p>
                <p>On the bottom of the screen, you will be able to see who is currently online for a video chat.</p>
            </div>);
    }
}

export default Home;
