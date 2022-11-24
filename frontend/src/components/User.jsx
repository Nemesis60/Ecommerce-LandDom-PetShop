import { useNavigate } from 'react-router-dom';
import { useGetUsersQuery } from '../features/usersApiSlice';
import { memo } from 'react';

function User({ userId }) {
    
    const { user } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
            user: data.entities[userId]
        }),
    })

    const navigate = useNavigate()

    if (user) {
        const handleEdit = () => navigate(`/users/${userId}`)

        const userRolesString = user.roles.toString().replaceAll(',', ', ')

        return (
            <tr className="table__row user">
                
                <td className="">{user.username}</td>
                <td className="">{userRolesString}</td>
                <td className="">
                    <button
                        className=""
                        onClick={handleEdit}
                    >
                        Edit
                    </button>
                </td>
            </tr>
        )

    } else return null
}

const memoizedUser = memo(User)

export default memoizedUser
