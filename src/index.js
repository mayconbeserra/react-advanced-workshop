import React, { useState }  from 'react';
import ReactDOM from 'react-dom';
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
  const toggle = useToggle(false);

  return (
    <div>
      <h2>Toggle it?</h2>
      <button onClick={toggle.inverse}>
        {`${toggle ? 'Hide it' : 'Show'} counter`}
      </button>
      { toggle.value && <Counter /> }
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
