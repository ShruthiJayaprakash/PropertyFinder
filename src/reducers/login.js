import * as types from '../constants/ActionTypes';

const defaultState ={
    isLoggedIn:false,
    token:null,
    email:null
}

export default function loginRequest(state={defaultState},action){
    console.log("Request");
    console.log(action);
    switch(action.type){
        case 'LOGIN'+types.RECV_DATA:
        localStorage.setItem('isLoggedIn',true);    
        localStorage.setItem('token',action.data.token);    
        localStorage.setItem('email',action.params.email);    
        return {
            isLoggedIn:true,
            token:action.data.token,
            email:action.params.email
        }
        default:
            return state;
    }
}
