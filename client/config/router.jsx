import React from 'React'
import {Route} from 'react-router-dom'

import TopicList from '../views/topic-list/index'
import TopicDetail from '../views/topic-detail/index'

export default ()=>[
  <Route path="/" component={TopicList}/>,
  <Route path="/detail" component={TopicDetail}/>
]
