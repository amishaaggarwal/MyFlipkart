import MainContent from 'components/MainContent/MainContent';
import Sidebar from 'components/Sidebar/Sidebar'
import React from 'react'
import "./CenterContent.scss";
function CenterContent() {
    return (
        <div className='center-content'>
            <Sidebar />
            <MainContent/>
        </div>
    )
}

export default CenterContent
