import React from 'react';
import BackgroundBottom from "../background/BackgroundBottom";
import BackgroundMiddle from "../background/BackgroundMiddle";
import BackgroundTop from "../background/BackgroundTop";
import BottomSection from "../bottomsection/BottomSection";
import Innerlayout from "../innerlayout/innerlayout";
import Topsection from "../topsection/Topsection";
import "./Layout.css"

const Layout = () => {
    return (
        <div className="layout">
            <BackgroundTop/>
            <BackgroundMiddle/>
            <BackgroundBottom/>
            <div className="layout-inner">
                <Topsection/>
                <Innerlayout/>
                <BottomSection/>
            </div>
        </div>
    )
}

export default Layout
