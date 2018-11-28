import React, { useContext } from 'react';
import { UserContext } from '../index';

const Header = () => {
  const {name} = useContext(UserContext);
  return (
    <div>
      <h2>The name is {name}</h2>
    </div>
  )
}

export default Header;
