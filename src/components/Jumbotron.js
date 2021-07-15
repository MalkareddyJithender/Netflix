import React from 'react'
import '../css/Jumbotron.css';

function Jumbotron(props) {
    return (
        <div id="jumbotronContainer">
            <div className={`jumbotron jumbotron--${props.direction}`} >
                <div className="jumbotron__left">
                    <h1 className="jumbotron__title">{props.title}</h1> 
                    <h3  className="jumbotron__subTitle">{props.subTitle}</h3>
                </div>
                <div className="jumbotron__right">
                    <img src={props.image} alt={props.alt} />
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;
