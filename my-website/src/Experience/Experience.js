import React from 'react';
import '../Panel/Panel.css';

const experience = (props) => {
    return (
        <div className="responsiveFlexRow spacing centerItems">
            <div className="logo">
                <img className="personal" src={props.logo} alt="logo"/>
            </div>
            <div className="flexColumn experience">
                <h2 className="workplace">{props.workplace}</h2>
                <h4 className="position">{props.position} {props.duration}</h4>
                {props.points.map((point, index)  => {
                    return <div key={index} className="point"><p>{point}</p></div>
                })}
            </div>
        </div>
    )
}

export default experience;