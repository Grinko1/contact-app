import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { contactApi } from '../features/contacts/contactApi';
import userReducer from '../features/user/userSlice'
import contactReducer from '../features/contacts/contactSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    contact: contactReducer,
    [contactApi.reducerPath]: contactApi.reducer
  },
  middleware:(getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(contactApi.middleware)
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
