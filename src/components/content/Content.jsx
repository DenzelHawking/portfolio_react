import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from '../pages/Main';
import About from '../pages/About';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';


import './content.css';


function Content(props) {
  return (
    <div className='content'>
      <div className={props.moveSide}>
        <CurrentTab />
        <NextTab />
      </div>
    </div>
  )
}

function CurrentTab() {
  return (
    <div className="current-tab">
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/about' component={About} />
        <Route path='/skills' component={Skills} />
        <Route exact path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

function NextTab() {
  return (
    <div className="next-tab"></div>
  )
}

export default Content;
