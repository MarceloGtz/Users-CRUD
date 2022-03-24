import React from 'react';

const UsersList = ({ users }) => {
    return (
        <div>
            <h1 className="title">Users List <i className="fa-solid fa-users"></i></h1>
            <ul className='UsersList'>
                {
                    users.map(user => (
                        <li key={user.id} className="card">
                            <h3>{user.first_name} {user.last_name} <i class="fa-solid fa-user"></i></h3>
                            <p>{user.email} <i className="fa-solid fa-envelope"></i></p>
                            <p>{user.birthday} <i className="fa-solid fa-cake-candles"></i></p>
                            <div className="card__buttons">

                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default UsersList;