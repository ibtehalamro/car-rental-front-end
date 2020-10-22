import React from 'react';
import Card from "./Card";

const LightCard = () => {
    return (
        <div className={'light-card-wrapper'}>
            <Card icon={'calendar'} title={'Pick An Appointment'} subtitle={'You can just call our numbers to pick an appointment with us'}/>
            <Card icon={'working-hours'} title={'Working Hours'} subtitle={'Week Days: 08:00 - 23:00 \n Friday: 12:00 - 18:00'}/>
            <Card icon={'24-hours'} title={'Emergency Calls 24/7'} subtitle={'call us on +012341222'}/>
        </div>
    );
};



export default LightCard;