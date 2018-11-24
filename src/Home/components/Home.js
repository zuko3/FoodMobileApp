import React from "react";
import Banner from "./Banner";
import HomeBody from "./HomeBody";

export class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
            <Banner />
            <HomeBody/>
            </React.Fragment>
        )
    }
}