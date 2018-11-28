import React, { useContext } from 'react';
import { UserContext } from '../index';

const Footer = () => {
  const {surname} = useContext(UserContext);
  return (
    <div>
      <h2>The surname is {surname}</h2>
    </div>
  )
}

export default Footer;
