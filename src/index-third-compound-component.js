import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

//components
import Select from './Components/Select';
import Option from './Components/Option';

function App() {
  return (
    <div>
      <h3>Select and option</h3>
      <Select>
        <Option value="blue">Blue</Option>
        <Option value="red"> Red </Option>
        <Option value="white"> White </Option>
      </Select>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
