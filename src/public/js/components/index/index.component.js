import React, { Component } from 'react';
import WelcomeComponent from "./welcome.component";
import LoginFormComponent from "../login/login.component";

class IndexComponent extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return(
            <div className="mainContainer" id="content">
                <WelcomeComponent />
                <LoginFormComponent />
            </div>
        )
    }
}

export default IndexComponent;