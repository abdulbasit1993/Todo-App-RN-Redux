import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Todo from './src/screens/Todo';
import rootReducer from './src/redux/reducers/rootReducer';

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <Todo />
  </Provider>
);

export default App;
