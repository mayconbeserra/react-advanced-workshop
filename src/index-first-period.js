import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

// Hooks
import useInput from './CustomHooks/useInput';
import useToggle from './CustomHooks/useToggle';
import useMeasurements from './CustomHooks/useMeasurements';

//components
import Counter from './Counter';

function App() {
  const email = useInput('mike');
  const password = useInput('');
  const toggle = useToggle(false);

  const measurement = useMeasurements(window.innerWidth);

  return (
    <div>
      <h2>Toggle it?</h2>
      <button onClick={toggle.inverse}>
        {`${toggle ? 'Hide it' : 'Show'} counter`}
      </button>
      { toggle.value && <Counter /> }
      <h2>Window Measurement</h2>

      <div>Measurement for width: {measurement.width}</div>
      <div>Measurement for height: {measurement.height}</div>

      <h2>Use Form</h2>
        <div><input type="text" value={email.value} onChange={email.onChange} /></div>
        <div><input type="password" value={password.value} onChange={password.onChange} /></div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
