import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import Header from './Components/Header';
import LoginForm from './Components/LoginForm';
import UserManager from './Components/UserManager';

export const UserContext = React.createContext({});

function App() {

  return (
    <div>
      <UserManager>
        <h3>Dynamic Context</h3>
        <Header />
        <LoginForm />
      </UserManager>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
