import React, {useEffect,useCallback} from "react";
import { getSpecificPerson } from '../../Store/Slice/personDetailSlice';
import {useDispatch, useSelector} from "react-redux";
import  { useParams } from 'react-router-dom';
import LoadingSpinner from "../Utils/Spinner";
import {useNavigate} from "react-router-dom";


  function  Detail  ()  {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const   personDetail  = useSelector(state => state.detail)
      const { id } = useParams();
      const getPersonDetail = useCallback(() => {

          dispatch(getSpecificPerson(id));
      }, [id,dispatch])
    useEffect(() =>  {

        getPersonDetail();


    },[getPersonDetail]);
    return (
<div className="card-header">
            {personDetail.status === 'success' ? <div className="App">
                <button onClick={() => navigate(-1)} className="previous round">&#8249;</button>
                <h1 style={{color:'white'}}>{personDetail.payload.name }</h1>
                <p className="body-content" style={{color:'white'}}><b>{personDetail.payload.name.toUpperCase()}</b> was born <b>{personDetail.payload.gender === 'n/a' ? 'female' : 'male'}</b> on <b>{personDetail.payload.birth_year}</b> {personDetail.payload.gender === 'male' ? 'his' : 'her'} skin color is <b>{personDetail.payload.skin_color}</b> , hair color is <b>{personDetail.payload.hair_color === 'n/a' ? 'blonde' : personDetail.payload.hair_color}</b> {personDetail.payload.gender === 'male' ? 'he' : 'she'} loved <b>{personDetail.payload.films.length}</b> {personDetail.payload.films.length > 1 ? 'films' : 'film'} & is about <b>{personDetail.payload.height}</b> ft tall & weights about <b>{personDetail.payload.mass}</b> Kg </p>


            </div> : <LoadingSpinner />}
</div>
    )
}

export default Detail;
