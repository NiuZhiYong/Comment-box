import React,{Component} from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types'

export default class CommentList extends Component{
    static propTypes = {
        comments:PropTypes.array,
        onDeleteComment:PropTypes.func
    }
    static defaultProps = {
        comments:[]
    }
    handleDelete(index){
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(index)
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