import React from 'react';
import './App.css';
import { NavbarComponent } from './components/navbar.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ReimbursementComponent } from './components/reimbursements.component';
import { HomeComponent } from './components/home.component';
import { UploadComponent } from './components/upload.component';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarComponent />
        <main>
        <Switch>
            <Route path="/reimbursements">
              <ReimbursementComponent />
            </Route>
            <Route path="/home">
              <HomeComponent />
            </Route>
            <Route path="/upload">
              <UploadComponent />
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
