import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

//components
import Tabs from './Components/Tabs';
import Tab from './Components/Tab';

function App() {
  const [tab, setTab] = useState();

  const goToGallery = () => {
    setTab('gallery');
  };

  return (
    <div>
      <h3>Controlled Components</h3>
      <button onClick={goToGallery}>Go to gallery</button>
      <Tabs initialValue="home" value={tab} onChange={setTab}>
        <Tab value="home"> Home </Tab>
        <Tab value="about"> About </Tab>
        <Tab value="gallery"> Gallery </Tab>
      </Tabs>

      {tab === "home" && <div> welcome home </div>}
      {tab === "about" && <div> it was about time </div>}
      {tab === "gallery" && <div> gallery pictures  </div>}

    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
