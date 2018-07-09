import React,{Component} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

export default class CommentApp extends Component{
    constructor(){
        super()
        this.state = {
            comments:[]
        }
    }
    handleSubmit(comment){
        const comments = this.state.comments;
        comments.push(comment);
        this.setState({
            comments
        })
        this._saveContent(comments)
    }
    handleDeleteContent(index){
        const comments = this.state.comments;
        comments.splice(index,1)
        this.setState({
            comments
        })
        this._saveContent(comments)
    }
    componentWillMount(){
        this._loadContent()
    }
    _saveContent(content){
        localStorage.setItem('content',JSON.stringify(content))
    }
    _loadContent(){
        let comments = localStorage.getItem('content')
        if(comments){
            comments = JSON.parse(comments)
            this.setState({
                comments:comments
            })
        }
    }
    render(){
        return (
            <div className="wrapper">
                <CommentInput 
                onSubmit = {this.handleSubmit.bind(this)}
                />
                <CommentList 
                commons = {this.state.comments}
                onDeleteContent = {this.handleDeleteContent.bind(this)}
                />
            </div>    
        )
    }
}