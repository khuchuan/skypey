import React from 'react';
import './App.css';

import Sidebar from '../../components/Sidebar/Sidebar';
import Main from '../../components/Main/Main';
import store from '../../store';
import _ from 'lodash';

const App = () => {
  const { contacts, user, activeUserId } = store.getState();
  // console.log('app: ' + JSON.stringify( {contacts}));

 // console.log('app.user: ' + JSON.stringify( {user}));

  return (
    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main user = {user} activeUserId = {activeUserId} />
    </div>
  );

}

export default App;
