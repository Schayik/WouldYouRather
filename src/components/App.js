import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { handleInitialData } from '../actions/shared'

import Nav from './Nav'
import QuestionList from './QuestionList'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import QuestionDirector from './QuestionDirector'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Nav />
          {!this.props.loading &&
            <div className='container'>
              <Route path='/' exact component={QuestionList} />
              <Route path='/add' component={NewQuestion} />
              <Route path='/leaderboard' component={Leaderboard} />
              <Route path='/question/:id' component={QuestionDirector} />
            </div>
          }
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps( { authedUser, questions } ) {
  return {
    loading: questions === null,
  }
}

export default connect(mapStateToProps)(App);
