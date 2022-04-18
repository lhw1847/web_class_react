import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents"
import ContTitle from "../layout/Title";
import YouCont from "../includes/YouCont";
import ContContact from "../layout/Contact";
import Footer from "../layout/Footer";

function Youtube(){
    return(
        <>
            <Header />
            <Contents>
                <ContTitle title={["coding", "youtuber"]}/>
                <YouCont />
                <ContContact />
            </Contents>
            <Footer />
        </>
    )
}

export default Youtube;