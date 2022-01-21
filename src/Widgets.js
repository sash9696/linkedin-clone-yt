import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


function Widgets() {

    // const newsArticle = (heading, subtitle) => {
    //     <div className="widgets_article">
    //         <div className="widgets_articleLeft">
    //             <FiberManualRecordIcon/>
    //         </div>
    //         <div className="widgets_articleRight">
    //             <h4>{heading}</h4>
    //             <p>{subtitle}</p>
    //         </div>
    //     </div>
    // }

    return (
        <div className='widgets'>
            <div className="widgets_header">
                <h2>LinkedIn News</h2>
                <InfoIcon/>
            </div>
            {/* {newsArticle('Corona Virus India Update:', 'Top News 9k readers')}
            {newsArticle('Corona Virus India Update:', 'Top News 9k readers')}
            {newsArticle('Corona Virus India Update:', 'Top News 9k readers')}
            {newsArticle('Corona Virus India Update:', 'Top News 9k readers')}
            {newsArticle('Corona Virus India Update:', 'Top News 9k readers')}
            {newsArticle('Corona Virus India Update:', 'Top News 9k readers')}
            {newsArticle('Corona Virus India Update:', 'Top News 9k readers')}
         */}
                <div className="widgets_article">
                    <div className="widgets_articleLeft">
                        <FiberManualRecordIcon/>
                    </div>
                <div className="widgets_articleRight">
                        <h4>Corona Virus India Update:</h4>
                        <p>Top News 9k readers</p>
                    </div>
                    
                </div>
                <div className="widgets_article">
                    <div className="widgets_articleLeft">
                        <FiberManualRecordIcon/>
                    </div>
                <div className="widgets_articleRight">
                        <h4>Corona Virus India Update:</h4>
                        <p>Top News 9k readers</p>
                    </div>
                    
                </div>
                <div className="widgets_article">
                    <div className="widgets_articleLeft">
                        <FiberManualRecordIcon/>
                    </div>
                <div className="widgets_articleRight">
                        <h4>Corona Virus India Update:</h4>
                        <p>Top News 9k readers</p>
                    </div>
                    
                </div>
                <div className="widgets_article">
                    <div className="widgets_articleLeft">
                        <FiberManualRecordIcon/>
                    </div>
                <div className="widgets_articleRight">
                        <h4>Corona Virus India Update:</h4>
                        <p>Top News 9k readers</p>
                    </div>
                    
                </div>
                <div className="widgets_article">
                    <div className="widgets_articleLeft">
                        <FiberManualRecordIcon/>
                    </div>
                <div className="widgets_articleRight">
                        <h4>Corona Virus India Update:</h4>
                        <p>Top News 9k readers</p>
                    </div>
                    
                </div>
                <div className="widgets_article">
                    <div className="widgets_articleLeft">
                        <FiberManualRecordIcon/>
                    </div>
                <div className="widgets_articleRight">
                        <h4>Corona Virus India Update:</h4>
                        <p>Top News 9k readers</p>
                    </div>
                    
                </div>
            
            
        </div>
    )
}

export default Widgets
