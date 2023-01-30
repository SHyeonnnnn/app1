import React, {useState, useEffect} from 'react';
import UserList from "../component/UserList";
import axios from "axios";

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(Response => {
            setUsers(Response.data)
        })
    },[]);
    
    return (
        <>
            <h1>Users</h1>
            <UserList users={users}/>
            
        </>
    );
};

export default Users;