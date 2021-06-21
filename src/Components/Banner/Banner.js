import React from 'react';
import burger from '../../images/burger.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner d-flex align-items-center justify-content-center">
            <div class="container">
                <div class="row align-items-center">
                     <div class="col-md-6 order-md-2 mb-5">
                        <img className="img-fluid" src={burger} alt="burger" />
                    </div>
                    <div class="col-md-6 text-white">
                        <h3 className="style-text">Burger Delivery</h3>
                        <h1>Burger Bros</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque ipsum magnam accusantium commodi velit dignissimos unde. Cumque libero deleniti nesciunt eveniet totam pariatur natus debitis similique, qui, illo reprehenderit quo?</p>
                        <div className="btn btn-brand">Delivery Now</div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Banner;