import React from 'react';
import DarkCard from "./DarkCard";
import './darkCards.css'
const DarkCards = () => {
    return (
        <div className={'dark-cards-wrapper'}>
            <DarkCard title={1234} subtitle={'Cars Served'}/>
            <DarkCard title={20323} subtitle={'Reservations'}/>
            <DarkCard title={123} subtitle={'Available Cars'}/>
        </div>
    );
};

export default DarkCards;