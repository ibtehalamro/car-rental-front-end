import React from 'react';
import './LightCard.css';
const Card = ({icon,title,subtitle}) => {
    return (
        <div className={'light-card'}>

            {icon===undefined?null: <img className="icon" src={ require(`../../assets/images/icons/${icon}.svg`)} alt={'icon'} />}
            <h3 className="title">{title}</h3>
            <h4 className="sub-title">{subtitle}</h4>
        </div>
    );
};

export default Card;