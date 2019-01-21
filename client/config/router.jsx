import React from 'react'
import { Route } from 'react-router-dom'

import TopicList from '../views/topic-list/index'
import TopicDetail from '../views/topic-detail/index'
// render={() => <Redirect to="/list" />}
export default () => [
  <Route path="/" component={TopicList} exact key="first" />,
  <Route path="/list" component={TopicList} key="list" />,
  <Route path="/detail" component={TopicDetail} key="detail" />,
]
