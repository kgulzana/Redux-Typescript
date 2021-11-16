import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTypedSelector } from '../hooks/useTypedSelector';
import {fetchUsers} from '../store/action-creators/user'
import {useAction} from '../hooks//useAction'

const UserList: React.FC = () => {
  const { users, error, loading } = useTypedSelector((state) => state.user);
  const {}= useAction()
useEffect (()=> {
    (fetchUsers())
}, [])

if(loading) {
    return <h1>Идет загрузка...</h1>
}
if(error) {
    return <h1>{error}</h1>
}
  return (
    <div>
        {users.map(user =>
        <div>{user.name}</div>
        )}
    </div>
 )
};

export default UserList;
