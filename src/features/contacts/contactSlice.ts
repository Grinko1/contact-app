import {createSlice ,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type IContact = {
    id?: string,
    name: string,
    tel: string,
    email: string ,
    site: string  
}
interface ContactState {

    contact: IContact,
    status: string,
    error:string
}
const initialState : ContactState = {

    contact:{
        id: '',
        name: '',
        tel: '',
        email: '',
        site: ''  
    },
    status :'',
    error:'' 
}



const BASE_URL = 'http://localhost:3001/contacts'




export const addContact = createAsyncThunk(
    'name/addContact',
    async(contact: IContact, {rejectWithValue}) =>{
        try {
            const res = await axios.post(BASE_URL, 
                {
                    id: Date.now(),
                    name: contact.name,
                    phone:contact.tel,
                    email: contact.email,
                    website: contact.site
                })
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)


export const getContact  = createAsyncThunk(
    'contact/getContact',
    async(id :string,{rejectWithValue}) => {
        try {
            const {data} = await axios.get(`${BASE_URL}/${id}`)
            return data
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const updateContact = createAsyncThunk(
    'contact/updateContact',
    async(contact: IContact, {rejectWithValue}) =>{
        try {
            const res = await axios.patch(`${BASE_URL}/${contact.id}`, 
                {
                    name: contact.name,
                    phone:contact.tel,
                    email: contact.email,
                    website: contact.site
                })
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const deleteContact = createAsyncThunk(
    'contact/deleteContact',
    async(id :string,{rejectWithValue}) => {
        try {
            const res = await axios.delete(`${BASE_URL}/${id}`)
           
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers:{},
    extraReducers:{
      
        [addContact.pending.toString()] :(state) => {
            state.status = 'loading'
            state.error = ''
        },
        [addContact.fulfilled.toString()] :(state) => {
      
            state.status = 'success'
            state.error = ''

        },
        [addContact.rejected.toString()] :(state, action ) => {
            state.status = 'error'
            state.error = action.payload
        },
        [getContact.pending.toString()] :(state) => {
            state.status = 'loading'
            state.error = ''
        },
        [getContact.fulfilled.toString()] :(state, action) => {
            state.contact.email = action.payload.email
            state.contact.name = action.payload.name
            state.contact.tel = action.payload.phone
            state.contact.site = action.payload.website
            state.status = 'success'
            state.error = ''

        },
        [getContact.rejected.toString()] :(state, action ) => {
            state.status = 'error'
            state.error = action.payload
        },
        [updateContact.pending.toString()] :(state) => {
            state.status = 'loading'
            state.error = ''
        },
        [updateContact.fulfilled.toString()] :(state) => {
      
            state.status = 'success'
            state.error = ''

        },
        [updateContact.rejected.toString()] :(state, action ) => {
            state.status = 'error'
            state.error = action.payload
        },
        [deleteContact.pending.toString()] :(state) => {
            state.status = 'loading'
            state.error = ''
        },
        [deleteContact.fulfilled.toString()] :(state) => {
      
            state.status = 'success'
            state.error = ''

        },
        [deleteContact.rejected.toString()] :(state, action ) => {
            state.status = 'error'
            state.error = action.payload
        },
    }
})

export default contactSlice.reducer