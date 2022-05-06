import React, {useEffect} from "react";
import  { useSelector ,  useDispatch } from 'react-redux';
import { fetchPersons } from '../../Store/Slice/personSlice';

import Card from "./Card/Card";
import LoadingSpinner from "../Utils/Spinner";
import Pagination from "./Pagination";

export  const  Home = () => {
    const dispatch = useDispatch();

    const   person  = useSelector(state => state.person)


    useEffect(() => {
        dispatch(fetchPersons(person.currentPage));


    },[]);

 return   ( <>
     { person.status === 'success' ? <div className="App">
         <Pagination />
         {/*i had used map index as key because there was no db generated ids*/}
         {person.payload.map((data,i) => <Card  data={data} key={i+1} identifier={i+1}/>)}

     </div> : <LoadingSpinner />}
 </> );
}

