import '../css/Item.css';
import React,{useState} from 'react';

function Item(props) {
        const [showContent, setShowContent] = useState(false);
        console.log('heyy i am!');
    return (
        <div className="item">
            <div className="item__header" onClick={() =>
            {
                setShowContent(!showContent)
            }}>
                <p className="item__title"> { props.header } </p>

                {    showContent ? 
                    <img className="item__icon" src="/images/icons/close-slim.png" alt="Close" />
                    :
                    <img className="item__icon" src="/images/icons/add.png" alt="Open" />
                }
            </div>
            {   
                showContent ? 
                <div className="item__body">
                <p> { props.body } </p>
                </div>
                :
                null
            }
        </div>
    )
}

export default Item;
