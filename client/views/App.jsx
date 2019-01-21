﻿import React from 'react'
import { Link } from 'react-router-dom'
import Routes from '../config/router'

export default class App extends React.Component {
  componentDidMount() {
    // do something
  }

  render() {
    return [
      <div key="banner">
        <Link to="/list">首页</Link>
        <br />
        <Link to="/detail">详情页面</Link>
      </div>,
      <Routes key="routers" />,
    ]
  }
}
