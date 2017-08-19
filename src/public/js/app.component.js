import React from "react";
import HeaderComponent from "./components/shared/header/header.component";
import FooterComponent from "./components/shared/footer/footer.component";

class AppComponent extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div id="wrapper" className="container">
                <HeaderComponent />
                { this.props.children }
                <FooterComponent />
            </div>
        )
    }
}

export default AppComponent;