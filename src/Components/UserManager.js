import React, { useState } from 'react';
export const UserContext = React.createContext({});

const UserManager = ({children}) => {
  const [user, setUser] = useState({});

  return (
    <div>
      <UserContext.Provider value={{user, setUser}}>
        {children}
      </UserContext.Provider>
    </div>
  )
}

export default UserManager;
