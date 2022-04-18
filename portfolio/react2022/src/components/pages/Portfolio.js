import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents"
import PortCont from "../includes/PortCont"
import ContTitle from "../layout/Title";
import ContContact from "../layout/Contact";
import Footer from "../layout/Footer";

function Portfolio(){
    return(
        <>
            <Header />
            <Contents>
                <ContTitle title={["portfolio", "site"]}/>
                <PortCont />
                <ContContact />
            </Contents>
            <Footer />
        </>
    )
}

export default Portfolio;