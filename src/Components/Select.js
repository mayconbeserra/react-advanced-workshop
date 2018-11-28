import React, { useState } from 'react';

export const SelectContext = React.createContext({});

const Select = ({children}) => {
  const [selectedOption, setSelectedOption] = useState();
  const [opened, setOpened] = useState(false);

  console.log('Selected Option', selectedOption);
  console.log('Opened Option', opened);

  const selectOption = option => {
    setSelectedOption(option);
    setOpened(false);
  };

  const open = () => {
    setOpened(true);
  };

  if (opened) {
    return (
      <SelectContext.Provider value={{ selectedOption, selectOption }}>
        {children}
      </SelectContext.Provider>
    );
  } else {
    return (
      <div className="select" onClick={open}>
        {selectedOption ? selectedOption.children : 'Pick one'}
      </div>
    );
  }
}

export default Select;
