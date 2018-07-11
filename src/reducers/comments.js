//action types 
const INIT_COMMENTS = 'INIT_COMMENT';
const ADD_COMMENTS = 'ADD_COMMENT'
const DELETE_COMMENTS = 'DELETE_COMMENT'

//reducer
export default function(state,action){
    if(!state){
        state = {comments:[]}
    }
    switch(action.type){
        case INIT_COMMENTS:
            //
            return {
                comments:action.comments
            }
        case ADD_COMMENTS:
            //
            return {
                comments:[...state.comments,action.comment]
            }    
        case DELETE_COMMENTS:
            //
            return {
                comments:[...state.comments.slice(0,action.commentIndex),
                          ...state,comments.slice(action.commentIndex+1)]
            }    
        default:
            return state;    
    }
}

//action creators
export const initComments = (comments) => {
    return {type:INIT_COMMENTS,comments}
}
export const addComments = (comments) => {
    return {type:ADD_COMMENTS,comments}
}
export const deleteComments = (comments) => {
    return {type:DELETE_COMMENTS,comments}
}