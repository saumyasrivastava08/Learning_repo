import React from 'react';
import PageWrapper from './components/PageWrapper';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

 //Pages
import Home from './components/Pages/Home';
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import Team from './components/Common/Team';
import Portfolio from './components/Common/Portfolio'

function App() {
  return (
    <Router>
      
        <PageWrapper>
          
          <Route 
          exact={true}
          path="/"
          component={Home}
          />
          <Route
            path="/about"
            component={About}
            />
            <Route
               path="/contact"
               component={Contact}
               />
                <Route
               path="/team"
               component={Team}
               />
               <Route
               path="/portfolio"
               component={Portfolio}
               />

      </PageWrapper>
    </Router>
        
  );
}

export default App;
