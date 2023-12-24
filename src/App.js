// App.js

import React, { useState } from 'react';
import Navbar from './Component/Navbar';
import Homepage from './Component/Homepage';
import Calculator from './Component/Calculator';
import Msg from './Component/msg';

const App = () => {
  const [activeComponent, setActiveComponent] = useState('home');

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'home':
        return <Homepage />;
      case 'calculator':
        return <Calculator />;
      case 'quote':
        return <Msg />
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar onButtonClick={handleButtonClick} />
      {renderActiveComponent()}
    </div>
  );
};

export default App;
