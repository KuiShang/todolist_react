import React from 'react';
import QuestionItem from './QuestionItem'

function QuestionList (props) {


		var onVote = props.onVote;
		var onDelete = props.onDelete
		var questions = props.questions;
		if(!Array.isArray(questions)) throw new Error('this.props.questions必需是数组！');

		var questionComps = questions.map(function(q){
			return	<QuestionItem 
				      key = {q.id} 
				      questionKey = {q.id} 
					  title = {q.title} 
					  description = {q.description} 
					  voteCount = {q.voteCount} 
					  onVote = {onVote}
					  onDelete= {onDelete}
					  // onVote = {this.state.onVote}
				    />
		})
		
		return (
			<div id="questions" className="">     
		        {questionComps}
		    </div>
		)


}
export default QuestionList
