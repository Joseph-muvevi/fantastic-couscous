import React from 'react';
import BackgroundBottom from "./BackgroundBottom";
import "./BackgroundLayout.css";
import BackgroundMiddle from "./BackgroundMiddle";
import BackgroundTop from "./BackgroundTop";

const BackgroundLayout = () => {
    return (
        <div className="background-layout">
            <BackgroundTop/>
            <BackgroundMiddle/>
            <BackgroundBottom/>
        </div>
    )
}

export default BackgroundLayout
