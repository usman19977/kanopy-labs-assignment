import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {interceptor} from "../../Services/axios-config";
import Axios from "axios";

export const getSpecificPerson = createAsyncThunk(
    'person/getSpecificPerson',
    async (peopleID) => {
        interceptor();
        let { data } = await Axios.get("/api/people/"+peopleID);
        return data;
    }
)

const peopleSlice = createSlice({
    name : "personDetail",
    initialState : {
        payload : [],
        status : null,
    },
    extraReducers :{
        [getSpecificPerson.pending] : (state,action) => {
            state.status = 'loading';
        },
        [getSpecificPerson.fulfilled] : (state,action) => {
            state.status = 'success';
            state.payload = action.payload;
        },
        [getSpecificPerson.rejected] : (state,action) => {
            state.status = 'failed';

        }
    }

})

export  default  peopleSlice.reducer;