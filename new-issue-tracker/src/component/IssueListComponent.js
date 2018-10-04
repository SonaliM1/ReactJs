import React,{Component} from 'react';
import IssueNameComponent from './IssueNameComponent';
import IssueForm from './IssueForm';

class IssueListComponent extends Component {
    constructor(props){
        super(props);
       this.changeStatus= this.changeStatus.bind(this);
       this.updateIssue= this.updateIssue.bind(this);
        this.state={
            issues:[
                
                 {name:"Create React App",completed:false},
                 {name:"Create React POC",completed:false},
                 {name:"Create React PPT",completed:false}
                    ],
            currentIssue:''
        }
                
    }
    updateIssue(newValue){
        this.setState({
            currentIssue:newValue
        });

    }
    changeStatus (index){ 
            
                var issues=this.state.issues;
                var issue=issues[index];
                issue.completed=!issue.completed;
                this.setState({
                    issues:issues
                });
               //console.log(this.state.issues[index]);
    }
    
    render(){
        
        return(
        <div>
            <h1>Issue Tracker App</h1>
            <hr/>
            <section>
                <IssueForm 
                currentIssue = {this.state.currentIssue}
                updateIssue ={this.updateIssue}
                />

            </section>
        <ul>
            {
                this.state.issues.map((issue,index)=>{
                    return <IssueNameComponent key={issue.name} 
                                              issue={issue}
                                            index={index}
                                              clickHandler={this.changeStatus}
                                             />
                })
            }
            
            </ul>
            </div>
            );
        
    }
}
export default IssueListComponent;
