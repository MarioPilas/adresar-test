import React from 'react';
import Login from './Login';
import AddressBook from './AddressBook';
import AddressBookForm from './AddressBookForm';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddressBookFav from './AddressBookFav';
 
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
         <Switch>
          <Route path='/' exact component={Login} />
          </Switch>
          <Route path='/adresar' component={AddressBook} />
       
        <Switch>
          <Route path='adresar/omiljeni' component={AddressBookFav} />
          <Route path='/adresar/dodaj' exact component={AddressBookForm} />
          <Route path='/adresar/detalji/:id' component={AddressBookForm} />
         </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;