import React,{Component} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

export default class CommentApp extends Component{
    render(){
        alert('rem and flex');
        return (            
            <div className="wrapper">
                <CommentInput />
                <CommentList />
            </div>    
        )
    }
}


