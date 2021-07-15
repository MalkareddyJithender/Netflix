import '../css/Browse.css';
import React,{ useContext,useEffect,useState } from 'react';
import userContext from '../context/context';
import Profile from './Profile';
import BrowseHeader from './BrowseHeader';
import Card from './Card';
import Footer from './Footer';

function Browse({ slides }) {
    const [category,setCategory] = useState('films');
    const [profile,setProfile] = useState({});
    const {user,dispatch} = useContext(userContext);
    const [ slideRows,setSlideRows ] = useState([]);


    useEffect(() =>
    {
        setSlideRows(slides[category]);
    },[category,slides]);

    return profile.firstName ?
    (
        <>
            <BrowseHeader 
             category={category} 
             setCategory={setCategory} 
             slideRows={slideRows} 
             setSlideRows={setSlideRows} 
             slides={slides}
            />
            <div className="group">
            {slideRows.map((slideItem) =>
                {
                    return <Card 
                            key={`${category}-${slideItem.title}`}
                            title={slideItem.title}
                            data={slideItem.data}
                            category={category}
                           />
                })}
            <Footer />
        </div>
        </>
    )
    :
    (
        <div className="browseContainer">
            <Profile user={{firstName:user?.firstName,photoUrl:user?.photoUrl}} dispatch={dispatch} setProfile={setProfile} />
        </div>
    )
}
export default Browse;
