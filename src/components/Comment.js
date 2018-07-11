import React,{Component} from 'react';

export default class Comment extends Component{
    constructor(){
        super()
        this.state = {
            timeString:''
        }
    }
    handleDelete(){
        if(this.props.onDelete){
            this.props.onDelete(this.props.index)
        }
    }
    componentWillMount(){
        this._updateTimeString();
        this._timer = setInterval(
            this._updateTimeString.bind(this), 
            5000
        )
    }
    componentWillUnmount(){
        clearInterval(this._timer)
    }
    componentDidMount(){
        
    }
    _updateTimeString(){
        const comments = this.props.comment;
        const duration = (+Date.now()-comments.createdTime)/1000;
        this.setState({ 
            timeString:duration>60
            ?`${Math.round(duration/60)}分钟前`
            :`${Math.round(Math.max(duration,1))}秒前`
        })
    }
    render(){
        return (
           <div className="comment">
                <div className="comment-user">
                    <span>{this.props.comment.username}</span> : 
                </div>
                <p>{this.props.comment.content}</p>
                <span className="comment-createdtime">
                    {this.state.timeString}
                </span>
                <span 
                onClick = {this.handleDelete.bind(this)}
                className="comment-delete">
                    删除    
                </span>
           </div>
        )
    }
}