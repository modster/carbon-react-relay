import React, { Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react';
import CarbonHeader from './components/CarbonHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
import ChartsPage from './content/ChartsPage';
// <Route path="/charts" component={ChartsPage} />
import D3FcPage from './content/D3FcPage';

class App extends Component {
  render() {
    return (
      <>
        <CarbonHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
            <Route path="/charts" component={ChartsPage} />
            <Route path="/d3Fc" component={D3FcPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
