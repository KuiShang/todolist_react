import React, { Component } from 'react';

class AddForm  extends Component{
  constructor(props) {
    super(props);
    this.submitHandle = this.submitHandle.bind(this);
  }
  submitHandle (e) {
    console.log('submit')
    e.preventDefault();
		if(!this.refs.title.value) return ;
		
		var newQuestion = {
			title: this.refs.title.value,
			description: this.refs.description.value,
			voteCount:0,
		};

		this.refs.addQuestionForm.reset();
		console.log('submitHandle')
		this.props.onNewQuestion( newQuestion );
  }

  render() {
    var styleObj = {
      display : this.props.isShow ? 'block':'none'
    };
    return (
      <form ref="addQuestionForm" name="addQuestion" className="clearfix" style={styleObj} onSubmit={this.submitHandle}>
        <div className="form-group">
          <label htmlFor="qtitle">问题</label>
          <input ref="title" type="text" className="form-control" id="qtitle" placeholder="您的问题的标题"/>
        </div>
        <textarea ref="description" className="form-control" rows="3" placeholder="问题的描述"></textarea>
        <div className="btn-wraper">
          <button className="btn btn-success pull-right queding" >确认</button>
          <button type="button" className="btn  btn-secondary pull-right quxiao" onClick={this.props.onToggleForm}>取消</button>
        </div>

      </form>
    )
  }
}
export default AddForm
