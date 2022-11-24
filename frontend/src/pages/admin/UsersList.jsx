import { useGetUsersQuery } from "../../features/usersApiSlice";
import User from '../../components/User';
import Loading from '../../components/Loading';

function UsersList () {
    

    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetUsersQuery('usersList', {
        pollingInterval: 60000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true
    })

    let content

    if (isLoading) content = <Loading></Loading>

    if (isError) {
        content = <p className="errmsg">{error.data.message}</p>
    }

    if (isSuccess) {

        const { ids } = users

        const tableContent = ids.length && ids.map(userId => <User key={userId} userId={userId} />)

        content = (
            <table className="width">
                <thead className="user__table-head">
                    <tr>
                        <th className="user__table-username">Username</th>
                        <th className="user__table-roles">Roles</th>
                        <th className="">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {tableContent}
                    
                </tbody>
            </table>
        )
    }

    return content
}

export default UsersList