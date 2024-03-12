import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Student } from '../models/Students.models';

export const studentApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/"
  }),
  tagTypes: ['students'],
  endpoints: (builder) => ({
    getStudents: builder.query<Student[], void>({
      query: () => "/posts",
      providesTags: ["students"],
      transformResponse : (response :Student[],meta,args:any) =>{                      //args uses = ui sai kush bej rahai h ussai bhi change kar sktai h
    //    return  response.slice(0,5)
    // return response.sort((a,b)=>
    // a.title.localeCompare(b.body))

      if(args === 2){
        return response.slice(0,4)
      }
      return response
     
      } 
    }),
    getStudent: builder.query<Student, number>({
      query: (id) => `/posts/${id}`,
      providesTags: ["students"],
    }),
    addStudents: builder.mutation<void, Student>({
      query: (student) => ({
        url: "/posts",
        method: "POST",
        body: student
      }),
      invalidatesTags: ["students"]
    }),
    deleteStudents: builder.mutation<void, number>({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["students"],
    }),
    updateStudent: builder.mutation<void, Student>({
        query: ({id,...rest}) => ({
          url: `/posts/${id}`,
          method: "PUT",
          body: rest
        }),
        invalidatesTags :["students"]
  }),
})
})

export const { useGetStudentsQuery, useAddStudentsMutation, useDeleteStudentsMutation, useGetStudentQuery,useUpdateStudentMutation} = studentApi;
