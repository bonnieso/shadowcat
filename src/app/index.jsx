import React from 'react';
import {render} from 'react-dom';
import { Link, BrowserRouter, Route } from 'react-router-dom';

import Like from './Like.jsx';

class App extends React.Component {
  render () {
    return (
        <div>
          <div>
              Hello
          </div>
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
