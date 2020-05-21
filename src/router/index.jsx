import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Home,Login,Sigin } from './assembly'
export default @connect ( state => {
  return {
    data:state.login.data
  }
})
class Router extends React.Component {
  render () {
    const { data } = this.props
    return (
      <BrowserRouter>
        <Switch>
        <Route path="/login" component={Login} />
        <Route path="/Sigin" component={Sigin} />
        <Route path="/" render = { () => {
          return data.user_id ? <Home /> : <Redirect to="/login" />
        }} />
      </Switch>
      </BrowserRouter>
    )
  }
}