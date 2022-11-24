import { apiSlice } from "../app/api/apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => ({
                url: '/users',
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            providesTags: ['User']
        }),
        newUser: builder.mutation({
            query: (newUser) => ({
                url: '/users/register',
                method: 'POST',
                body: newUser
            }),
            invalidatesTags: ['User']
        }),
        updateUser: builder.mutation({
            query: ({ id }) => ({
                url: `users/${id}`,
                method: 'PUT',
                body: { id }
            }),
            invalidatesTags: ['User']
        }),
        deleteUser: builder.mutation({
            query: ({ id }) => ({
                url: `/users/${id}`,
                method: 'DELETE',
                body: { id }
            }),
            invalidatesTags: ['User'],
        }),
    }),
})

export const {
    useGetUsersQuery,
    useNewUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation,
} = usersApiSlice