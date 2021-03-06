import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { formatDate } from '../utils/helpers'

class QuestionSmall extends Component {

  render() {
    const { question, author } = this.props
    return (
      <div className='question'>
        <h3>{author.name} Asks:</h3>
        <div className='question-wrapper'>
          <img
            src={author.avatarURL}
            alt={`Avatar of ${author}`}
          />
          <div className='question-options'>
            <h2>Would You Rather ...</h2>
            <p>{question.optionOne.text} or {question.optionTwo.text}?</p>
            <Link to={`/question/${question.id}`}>View Full</Link>
            <p>{formatDate(question.timestamp)}</p>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps( { users, questions }, {id} ) {
  const question = questions[id]
  return {
    question: question,
    author: users[question.author]
  }
}

export default connect(mapStateToProps)(QuestionSmall)
