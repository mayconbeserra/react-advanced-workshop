import React, { useContext } from 'react';
import { UserContext } from './UserManager';

const Header = () => {
  const {user} = useContext(UserContext);

  if (!user.name || !user.surname) {
    return <div>No user :( </div>;
  }

  return (
    <div>
      <h2>The name is {user.name}</h2>
    </div>
  )
}

export default Header;
