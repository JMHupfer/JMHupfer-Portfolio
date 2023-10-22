import React from 'react';
import './index.scss';
import portfolioData from '../../data/portfolio.json';

const Portfolio = () => {

    console.log(portfolioData);

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img src={port.cover}
                                className="portfolio-image"
                                alt="portfolio" />
                                <div>
                                    <p className="title">{port.title}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button className="btn" onClick={() => window.open(port.url)}>Let's See</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <>
        <div className="container portfolio-page">
            <h1 className="page-title">Portfolio</h1>
            <div>{renderPortfolio(portfolioData.portfolio)}</div>
        </div>
        </>    
    )
}

export default Portfolio;
