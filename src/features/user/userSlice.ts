import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface IUser {
    email: string | null,
    password: string  
}
interface UserState {
    user: IUser,
    status: string,
    error:string,
    isAuth: boolean
}

const initialState: UserState = {

    user : {
        email:localStorage.getItem('email') ? localStorage.getItem('email') : '',
        password:''
    },
    isAuth: false,
    status: '',
    error:''
}
const BASE_URL = 'http://localhost:3001/users'

export const register = createAsyncThunk(
    'user/register',
    async(user: IUser, {rejectWithValue}) => {
        try {
              const res = await axios.post(BASE_URL, 
            {
                id: Date.now(),
                email: user.email,
                password: user.password
            })
           
            return res.data
        } catch (e) {
            return rejectWithValue(e.message)
        }
      
    }
)
export const login = createAsyncThunk(
    'user/login',
    async(user: IUser,{rejectWithValue}) => {
        try {
            const {data} = await axios.get(`${BASE_URL}?email=${user.email}`)

           if(data.length){
              if(data[0].email === user.email && data[0].password === user.password){
                    return data
                }
                  if(data[0].password !== user.password){
                    throw new Error ('Неверный email или пароль!') 
                }  
           }
           
                 if(!data.length ) {
                throw new Error('Такого пользователя не существует!')
            }
            return data
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        logout (state) {
            state.user.email = ''
            state.user.password =''
            state.isAuth = false
            localStorage.setItem('email',  state.user.email)
        }
         
        
    },
    extraReducers:{
        [register.pending.toString()] :(state) => {
            state.status = 'loading'
            state.error = ''
        },
        [register.fulfilled.toString()] :(state, action) => {
            state.user.email = action.payload.email
            state.user.password = action.payload.password
            state.isAuth = true
            state.status = 'success'

            localStorage.setItem('email',  state.user.email || '') 
        },
        [register.rejected.toString()] :(state, action : PayloadAction<string>) => {
            state.status = 'error'
            state.error = action.payload
        },
        [login.pending.toString()] :(state) => {
            state.status = 'loading'
            state.error = ''
            
        },
        [login.fulfilled.toString()] :(state, action) => {
            state.user.email = action.payload[0].email
            state.user.password = action.payload[0].password
            state.isAuth = true
            state.error = ''
            state.status = 'success'
            localStorage.setItem('email',  state.user.email || '') 
        },
        [login.rejected.toString()] :(state, action : PayloadAction<string>) => {
            state.status = 'error'
            state.error = action.payload
        },

    }
})

export default userSlice.reducer
export const {logout} = userSlice.actions