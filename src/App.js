import React, { useState } from 'react';
import Card from './Card';
import About from './About';
import ReactModal from 'react-modal';
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
      <a href="https://github.com/teddy-ma/refactoring-card"><img width="149" height="149" src="https://github.blog/wp-content/uploads/2008/12/forkme_right_green_007200.png?resize=149%2C149" class="attachment-full size-full" alt="Fork me on GitHub" data-recalc-dims="1"></a>
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
