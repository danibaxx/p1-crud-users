import React from 'react';
import { Route } from 'react-router-dom';

// components
import WelcomePage from './components/welcome/WelcomePage';
import Header from './Nav/Header';
import Users from './components/users/Users';
import UserForm from './components/users/UserForm';

// styling
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      {/* Routes */}
      <Route exact path="/" component={WelcomePage}/>
      <Route exact path='/users' component={Users} />
      <Route exact path='/updateuser' component={UserForm} />
    </div>
  );
}

export default App;