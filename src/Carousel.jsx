import React from 'react';
import './styles/Carousel.css';

function Carousel() {
    return (
        <>
            <div id="carouselIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images.bewakoof.com/uploads/grid/app/bewakoof-oof-sale-desktop-strip-1603097557.jpg" className="d-block w-100" alt="first" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.bewakoof.com/uploads/grid/app/Tribe-underslider-desktop-1602770905.jpg" className="d-block w-100" alt="second" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.bewakoof.com/uploads/grid/app/bewakoof-shirt-and-kurta-online-fashion-shopping-DESKTOP-STRIP-1603893838.jpg" className="d-block w-100" alt="third" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </>
    )
}

export default Carousel;
