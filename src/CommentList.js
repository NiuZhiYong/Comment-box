import React,{Component} from 'react';
import Comment from './Comment'

export default class CommentList extends Component{
    constructor(){
        super();
        this.state = {
            comments:[]
        }
    }
    handleDelete(index){
        if(this.props.onDeleteContent){
            this.props.onDeleteContent(index)
        }
    }
    render(){
        const commons = this.props.commons
        return (
            <div>
                {commons.map((item,i) => 
                    <Comment comment = {item} key = {i} index = {i} onDelete={this.handleDelete.bind(this)}/>    
                )}
            </div>
        )
    }
}