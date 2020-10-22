import React from 'react';
import CarCard from "./CarCard";
import './Prices.css'

const Prices = () => {
    return (
        <div className="price-container">
            <h3 className="price-title">Prices:</h3>
            <ul className="car-slider">
                <li className="car">
                    <CarCard icon={'car1'}/>
                </li>
                <li className="car">
                    <CarCard icon={'car2'}/>
                </li>
                <li className="car">
                    <CarCard icon={'car3'}/>
                </li>
                <li className="car">
                    <CarCard icon={'car1'}/>
                </li>

                <li className="car">
                    <CarCard icon={'car2'}/>
                </li>
                <li className="car">
                    <CarCard icon={'car3'}/>
                </li>
                <li className="car">
                    <CarCard icon={'car1'}/>
                </li>
                <li className="car">
                    <CarCard icon={'car2'}/>
                </li>
                <li className="car">
                    <CarCard icon={'car3'}/>
                </li>
                <li className="car">
                    <CarCard icon={'car1'}/>
                </li>
                <li className="car">
                    <CarCard icon={'car2'}/>
                </li>
                <li className="car">
                    <CarCard icon={'car3'}/>
                </li>
            </ul>
        </div>
    );
};

export default Prices;