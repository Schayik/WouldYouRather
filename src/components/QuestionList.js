import React, { Component } from 'react'
import { connect } from 'react-redux'

import QuestionSmall from './QuestionSmall'

class QuestionList extends Component {

  state = {
    showAnsweredQuestions: false
  }

  render() {
    const { questionIds, answeredIds } = this.props

    const ids = this.state.showAnsweredQuestions
      ? questionIds.filter(id => answeredIds.includes(id))
      : questionIds.filter(id => !answeredIds.includes(id))

    return (
      <div className='question-list'>
        <h2>QuestionList</h2>
        <button onClick={() => this.setState({showAnsweredQuestions: true})}>
          Answered
        </button>
        <button onClick={() => this.setState({showAnsweredQuestions: false})}>
          Unanswered
        </button>
        <ul>
          {ids && ids.map(id => (
            <li key={id}>
              <QuestionSmall id={id}/>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps( { authedUser, users, questions } ) {
  return {
    questionIds: Object.keys(questions)
      .sort( (a,b) => questions[b].timestamp - questions[a].timestamp ),
    answeredIds: users[authedUser]
      ? Object.keys(users[authedUser].answers)
      : []
  }
}

export default connect(mapStateToProps)(QuestionList)
