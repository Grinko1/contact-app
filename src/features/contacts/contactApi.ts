import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IContacts } from '../../Pages/Home/Home';


export const contactApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    tagTypes: ['Contacts'],
    endpoints: (build) => ({
        getContacts: build.query <IContacts[], string>({
        query: (searchValue: string) => `contacts?name_like=${searchValue}`,
        providesTags: result => ['Contacts']
      }),

 
      deleteContact: build.mutation({
        query(id) {
          return {
            url: `contacts/${id}`,
            method: 'DELETE',
          }
        },
        invalidatesTags:  ['Contacts'],
      }),
    }),
  })
  
  export const {
    useGetContactsQuery,
    useDeleteContactMutation
  } = contactApi
  



