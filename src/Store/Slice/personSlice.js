import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {interceptor} from "../../Services/axios-config";
import Axios from "axios";
import {parseQueryString} from "../../Helpers/helper";

export const fetchPersons = createAsyncThunk(
    'persons/getAllPersons',
    async (pageFrom) => {
        interceptor();
        let { data } = await Axios.get("/api/people", {params : {
            page : pageFrom
            }});
        return {...data,pageFrom};
    }
)

const personSlice = createSlice({
    name : "persons",
    initialState : {
        count : null,
        nextPage : null,
        previousPage :  null,
        payload : [],
        status : null,
        currentPage : 1
    },
    extraReducers :{
        [fetchPersons.pending] : (state,action) => {
            state.status = 'loading';
        },
        [fetchPersons.fulfilled] : (state,action) => {
            state.status = 'success';
            state.payload =  action.payload.results;
            state.nextPage = parseQueryString(action.payload.next,'page');
            state.previousPage = parseQueryString(action.payload.previous,'page');
            state.count = action.payload.count;
            state.currentPage = action.payload.pageFrom;
        },
        [fetchPersons.rejected] : (state,action) => {
            state.status = 'failed';

        }
    }

})

export  default  personSlice.reducer;