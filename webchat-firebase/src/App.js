import React, {Suspense,} from 'react';
// import {configStore, getHistory} from './containers/configureStore';
import { ConnectedRouter } from 'connected-react-router';
import RoutesComponent from './containers/shared/routes/RoutesComponent';
import {GlobalStyles} from './components/styles/GlobalStyles';
import CallPage from './containers/CallPage';
import Spinner from './containers/shared/Spinner';
import {Provider} from 'react-redux';
import  store  from './store';
import {getHistory} from "./store"

// const store = configStore();
function App() {

  return (
      <Suspense fallback={<Spinner/>}>
          <Provider store={store}>
            <ConnectedRouter history={getHistory()}>
              <CallPage/>
              <RoutesComponent/>
            </ConnectedRouter>
          </Provider>
          <GlobalStyles/>
      </Suspense>
  );
}

export default App;
