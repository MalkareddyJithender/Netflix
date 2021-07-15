import '../css/Card.css';
import React,{ useState } from 'react';
import CardItem from './CardItem';
import CardFeature from './CardFeature';

export const featureContext = React.createContext();

function Card({title,data,category}) {
    const [showFeature,setShowFeature] = useState(false);
    const [itemFeature,setItemFeature] = useState({});
    return (
        <featureContext.Provider value={{showFeature,setShowFeature,itemFeature,setItemFeature}}>
            <div className="card">
                <p className="card__title">{title}</p>
                <div className="card__entities">
                    {
                        data.map((item) =>
                        {
                            return <CardItem 
                                    key={item._id} 
                                    item={item} 
                                    category={category}
                                    setShowFeature={setShowFeature}
                                    setItemFeature={setItemFeature}
                                    />
                        })
                    }
                </div>
                <CardFeature category={category} />
            </div>
        </featureContext.Provider>
    )
};

export default Card;
