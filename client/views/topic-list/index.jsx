import React from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import { AppState } from '../../store/app.state'

@inject('appState')
@observer
export default class TopicList extends React.Component {
  constructor() {
    super();
    this.changeName = this.changeName.bind(this)
  }

  componentDidMount() {
  }

  changeName(event) {
    this.props.appState.changeName(event.target.value)
  }


  render() {
    return (
      <div>
        <div>123</div>
        <input type="text" onChange={this.changeName} />
        <span>value : {this.props.appState.msg}</span>
      </div>

    )
  }
}

TopicList.propTypes = {
  appState: PropTypes.instanceOf(AppState),
}
