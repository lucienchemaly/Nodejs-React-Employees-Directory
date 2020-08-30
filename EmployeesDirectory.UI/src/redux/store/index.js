import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import mySaga from '../sagas'
import Reducers from '../reducers'
import toDoMiddleware from '../middlewares/todo.middleware'
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router'
import messages_en from "../../text/en.json";

// create the saga middleware
export const history = createBrowserHistory()


const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const initialState = {
    intl: {
        defaultLocale: 'en',
        locale: 'en',
        messages: messages_en,
    },
}

// mount it on the Store
const store = createStore(
    Reducers(history), initialState,
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware, toDoMiddleware))
)

// then run the saga
sagaMiddleware.run(mySaga)

// if (module.hot) {
//     // Enable Webpack hot module replacement for reducers
//     module.hot.accept('../reducers', () => {
//       store.replaceReducer(Reducers(history));
//     });
//   }

export default store;