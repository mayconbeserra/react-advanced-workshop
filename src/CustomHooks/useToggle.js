import { useState } from 'react';

const useToggle = initialValue => {
  const [value, setToggle] = useState(initialValue);

  return {
    value,
    inverse: () => setToggle(!value)
  }
}

export default useToggle;
