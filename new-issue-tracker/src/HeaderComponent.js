import React, { Component } from 'react';

class HeaderComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            headerText : "Yash Issue Tracker App",
            logo : "YITS"
        }

    }
    render(){
        return(
            <div>
                <h1>{this.state.headerText}</h1>
                <h3>{this.state.logo}</h3></div>

        );
    }
}

export default HeaderComponent;
