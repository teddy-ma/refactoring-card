import React, { useState } from 'react';
import GitHubForkRibbon from 'react-github-fork-ribbon';
import Card from './Card';
import About from './About';
import data from './data';

import './App.css';

function App() {
  const [show, setShow] = useState(false);

  const handleOpenModal = () => {
    setShow(true);
  };

  const handleCloseModal = () => {
    setShow(false);
  };

  return (
    <div>
      <h1> Refactoring Card </h1>
      <GitHubForkRibbon href="https://github.com/teddy-ma/refactoring-card" target="_blank" position="right">Fork me on GitHub</GitHubForkRibbon>
      <div className="row small-up-2 medium-up-3 large-up-4">
        {Object.keys(data).map((name) => (
          <Card key={name} name={name} page={data[name]} />
        ))}
      </div>
      <hr />
      <About />
    </div>
  );
}

export default App;
