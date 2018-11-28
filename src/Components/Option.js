import React, { useContext } from 'react';
import { SelectContext } from './Select';

const Option = ({ children, value }) => {
  const { selectedOption, selectOption } = useContext(SelectContext);

  console.log('Options Children:', children);

  const isActive = selectedOption && selectedOption.value === value;

  return (
    <div
      className="option"
      style={{
        fontWeight: isActive ? 'bold' : 'normal',
        color: isActive ? '#ffffff' : 'rgba(255,255,255,0.7)'
      }}
      onClick={() => selectOption({ value, children })}
    >
      {children}
    </div>
  );
};

export default Option;
