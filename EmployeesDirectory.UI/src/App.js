import { hot } from 'react-hot-loader';
import React, { Component } from 'react';
import store from './redux/store'
import { Provider } from 'react-redux';
import AppContainer from './containers/app'
import { IntlProvider } from 'react-intl-redux'

class App extends Component {

  render() { 
    return (
      <div className="App">
        <Provider store={store}>
          <IntlProvider textComponent={React.Fragment}>
            <AppContainer ></AppContainer> 
          </IntlProvider>
        </Provider>

      </div>
    );
  }
}

export default  hot(module)(App);
