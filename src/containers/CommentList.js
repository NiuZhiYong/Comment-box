import React,{Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import CommentList from '../components/CommentList';
import {initComments,deleteComments} from '../reducers/comments'

class CommentListContainer extends Component {
    static propTypes = {
        comments:PropTypes.array,
        initComments:PropTypes.func,
        onDeleteContent:PropTypes.func
    }
    componentWillMount(){
        this._loadComments()
    }
    _loadComments(){
        let comments = localStorage.getItem('comments')
        comments = comments?JSON.parse(comments):[]
        this.props.initComments(comments)
    }
    handleDeleteComment(index){
        const {comments} = this.props;
        const newComments = [
            ...comments.slice(0,index),
            ...comments.slice(index+1)
        ]
        localStorage.setItem('comments',JSON.stringify(newComments))
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(index)
        }
    }
    render(){
        return (
            <CommentList 
            comments = {this.props.comments}
            onDeleteComment = {this.handleDeleteComment.bind(this)}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comments:state.comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initComments:(comments) => {
            dispatch(initComments(comments))
        },
        onDeleteComments:(commentIndex) => {
            dispatch(deleteComments(commentIndex))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentListContainer)