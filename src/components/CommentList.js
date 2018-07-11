import React,{Component} from 'react';
import Comment from './components/Comment'

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
        const comments = this.props.comments
        return (
            <div>
                {comments.map((item,i) => 
                    <Comment comment = {item} key = {i} index = {i} onDelete={this.handleDelete.bind(this)}/>    
                )}
            </div>
        )
    }
}