import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleModal from './SimpleModal';
import DynamicModal from './DynamicModal';
import UsingHook from './UsingHook';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
          React-bootstrap modal demo<hr/>
          <SimpleModal /><hr/>
          <DynamicModal /><hr/>
          <UsingHook />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
