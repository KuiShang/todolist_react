import React, { Component } from 'react';

class QuestionItem  extends Component{
  constructor(props) {
    super(props);
    this.voteUp = this.voteUp.bind(this);
		this.voteDown = this.voteDown.bind(this);
		this.ondelte = this.ondelte.bind(this);
  }

  voteUp(e){
    var newCount = parseInt(this.props.voteCount + 1, 10);
    this.props.onVote( this.props.questionKey, newCount );
  }
  voteDown(e){
      var newCount = parseInt(this.props.voteCount - 1, 10);
      this.props.onVote( this.props.questionKey, newCount );
  }
	ondelte(e) {
		this.props.onDelete( this.props.questionKey );
	}
  render() {
		return (
			<div className="media">
	            <div className="media-left">
	              <button className="btn btn-info" onClick={this.voteUp}>
	                <span className="glyphicon glyphicon-chevron-up"></span>
	                <span className="vote-count">{this.props.voteCount}</span>
	              </button>
	              <button className="btn btn-info" onClick={this.voteDown}>
	                <span className="glyphicon glyphicon-chevron-down"></span>
	              </button>
	            </div>
	            <div className="media-body">
	              <h4 className="media-heading">{this.props.title}
								<button type="button" className="btn btn-danger" onClick={this.ondelte} >删除</button>
								<button type="button" className="btn btn-success">编辑</button>
								</h4>
	              <p>{this.props.description}</p>
	            </div>
	        </div>
		)
  }
}
export default QuestionItem
