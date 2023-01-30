import React from 'react';

const UserList = ({users}) => {
    return (
        <div className='container'>
            {users.map((useritem) => {
                return (
                    <div className='card' key={useritem.id}>
                        <div className='card-body'>
                            {useritem.name}
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default UserList;