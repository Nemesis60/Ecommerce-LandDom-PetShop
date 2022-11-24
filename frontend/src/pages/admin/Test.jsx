import React from 'react'
import { useState } from 'react';
import { useDeleteUserMutation, useGetUsersQuery, useNewUserMutation, useUpdateUserMutation } from '../../features/usersApiSlice';

function Test() {
    const [newUser, setNewUser] = useState('')

    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        error,
        endpointName
    } = useGetUsersQuery()
    
    const [addnewUser] = useNewUserMutation()
    const [updateUser] = useUpdateUserMutation()
    const [deleteUser] = useDeleteUserMutation()

    const handleSubmit = (e) => {
        e.preventDefault();

        setNewUser('')
    }

    console.log(users)

    let content;
    if (isSuccess) {
        content = users.map(user => {
            return (
                <div key={user.id}>
                    <table>
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Username</td>
                                <td>Email</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{user._id}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button>Edit</button>
                                    <button onClick={() => deleteUser({ id: user.id })}>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )
        })
    }

    return content;
}

export default Test
