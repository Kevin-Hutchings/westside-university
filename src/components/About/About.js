import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import History from '../History/History';
import Contact from '../Contact/Contact';

export default class About extends Component {
  render() {
    return (
      <div>
        <div className='subnav'>
          <Link to='/about' className='subnav_links'>
            <h3> About </h3> 
          </Link>
          <Link to='/about/history' className='subnav_links'>
            <h3> History </h3>
          </Link>
          <Link to='/about/contact' className='subnav_links'>
            <h3> Contact </h3>
          </Link>
        </div>
        <div className='box'>
          <Switch>
            <Route component={History} path='/about/history' />
            <Route component={Contact} path='/about/contact' />
            <Route path='/about'
              render={() => (
                <div>
                  <h1> About the University </h1>
                  <p>
                    It is known that there are an infinite number of worlds, simply because there is an infinite amount of space for them to be in. However, not every one of them is inhabited. Therefore, there must be a finite number of inhabited worlds. Any finite number divided by infinity is as near to nothing as makes no odds, so the average population of all the planets in the Universe can be said to be zero. From this it follows that the population of the whole Universe is also zero, and that any people you may meet from time to time are merely the products of a deranged imagination.
                  </p>
                </div>
              )} 
            />
          </Switch>
        </div>
      </div>
    )
  }
}