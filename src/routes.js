import React from 'react';
import { Home } from './views/Home';
import { About } from './views/About';
import { TopicList } from './views/TopicList';
import { NoMatch } from './views/NoMatch';
import { TopicDetail } from './components/TopicDetail';
import { NavBar } from './components/NavBar';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/About" component={About} />
        <Route exact path="/About" component={Home} />
        <Route exact path="/Topics" component={TopicList} />
        <Route path="/Topics/:topicId" component={TopicDetail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
};
