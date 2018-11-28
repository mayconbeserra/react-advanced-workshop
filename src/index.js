import React, { useState, useEffect }  from 'react';
import ReactDOM from 'react-dom';
import useInput from './CustomHooks/useInput';
import './styles.css';

//components
// import Counter from './Counter';

function Counter() {
    const [count, setCounter] = useState(0);

    console.log('render');

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCounter(count + 1)}>increase</button>
        <button onClick={() => setCounter(count - 1)}>decrease</button>
      </div>
    );
  }

function useToggle(initialValue) {
  const [value, setToggle] = useState(false);

  return {
    value,
    inverse: () => setToggle(!value)
  }
}

function App() {
  const email = useInput('mike');
  const password = useInput('');
  const toggle = useToggle(false);

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const resizeHandler = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', resizeHandler);

    return () => window.removeEventListener('resize', resizeHandler);
  });

  return (
    <div>
      <h2>Toggle it?</h2>
      <button onClick={toggle.inverse}>
        {`${toggle ? 'Hide it' : 'Show'} counter`}
      </button>
      { toggle.value && <Counter /> }
      <h2>Window Measurement</h2>

      <div>Measurement for width: {width}</div>
      <div>Measurement for height: {height}</div>

      <h2>Use Form</h2>
        <div><input type="text" value={email.value} onChange={email.onChange} /></div>
        <div><input type="password" value={password.value} onChange={password.onChange} /></div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
