import React, { useContext } from 'react';
import useInput from '../CustomHooks/useInput';
import { UserContext } from './UserManager';

const LoginForm = () => {
  const name = useInput('');
  const surname = useInput('');
  const {setUser} = useContext(UserContext);

  const submit = () => {
    let user = { name: name.value, surname: surname.value};
    setUser(user);
  }

  return (
    <div>
      <h2>Login</h2>
      <div><input type="text" value={name.value} onChange={name.onChange} /></div>
      <div><input type="password" value={surname.value} onChange={surname.onChange} /></div>

      <button onClick={submit}> submit </button>
    </div>
  )
}

export default LoginForm;
