import React from 'react';

function Addbtn (props) {
  return (
    <div className="btn-wraper">
        <button 
        type="button" 
        className="btn btn-primary"
        onClick={props.onToggleForm}>{props.txt}</button>
    </div>
  )
}
export default Addbtn
