import axios from 'axios';
import { useState,useEffect } from 'react';

function useContent(target)
{
    const [content,setContent] = useState([]);

    useEffect(() =>
    {
        axios
         .get(`https://g2-netflix-2.herokuapp.com/${target}`)
         .then((response) =>
         {
            setContent(response.data);
         })
         .catch((error) =>
         {
            console.log(error);
         });

    },[]);

    return {
       [target]:content
      }
};

export default useContent;