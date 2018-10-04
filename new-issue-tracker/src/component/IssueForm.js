import React from 'react';
const IssueForm = (props) =>{
    return (
       <div>
             <form>
                 <input type="text" 
                 value = {props.currentIssue}
                 onChange= {props.UpdateIssue}/>
                
                 </form> 

       </div>
    );
}

export default IssueForm;