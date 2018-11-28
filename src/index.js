import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import Header from './Components/Header';
import Footer from './Components/Footer';

const user = {name: "Maycon", surname: "Beserra"};
export const UserContext = React.createContext({});

function App() {

  return (
    <div>
      <UserContext.Provider value={user}>
        <h3>Context Example</h3>
        <Header />
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
