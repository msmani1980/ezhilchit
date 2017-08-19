import React, { Component } from 'react';

class WelcomeComponent extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div className="leftContainer">
                <h1>Welcome to Ezhil Chit Funds<br/></h1>
                <p>
                    Our Company was found in 2014 with the forethought of providing truly personalized financial instruments.<br/>
                    Ezhil Chit funds has exhibited expertised in the financial arena and solid operational excellence ever-since its incorporation.<br/>
                    Built on mutual trust and respect, we value the relationships fostered with our customers, and it is our endeavor to make each relationship fulfilling and enriching.<br/>
                    Mentored under the guidance of Mrs. Ezhilarasi Maduraimani has 10 years of spotless repute.<br/>
                </p>
            </div>
        );
    }
}

export default WelcomeComponent;
