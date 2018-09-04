import React from 'react';
import { fetchData } from '../actions/index';
import { connect } from 'react-redux';
import LoginComponent from '../components/LoginComponent'

class LoginContainer extends React.Component{
    constructor(props){
        super(props);
        this.hadleSubmit = this.hadleSubmit.bind(this);
    }
    hadleSubmit(e){
        e.preventDefault();
        //localStorage.setItem('email',e.target.email.value);
        //localStorage.removeItem('email',e.target.email.value);
        //console.log("fffff "+localStorage.getItem('email'));
       console.log(e.target.email.value);
        console.log(e.target.password.value);
       // console.log(e.target.gender.checked); 
        //let fn = fetchData('https://reqres.in/api/login','LOGIN','POST',{
           //'email':e.target.email.value,
         //  'password':e.target.password.value,
       // });
        //let fn = ;
        let fn = fetchData(
            'https://reqres.in/api/login', 
            'LOGIN', 
            'POST', 
            {
              "email": "peter@klaven",
              "password": "cityslicka"
            } 
          );
          
          this.props.dispatch(fn)
      }

    render(){
        return(<LoginComponent isSubmitForm={this.hadleSubmit} isLoggedIn={this.props.isLoggedIn} />
        );
    }
} 

const mapStateToProps = state => {
    return {
        isLoggedIn: state.loginrequest.isLoggedIn,
    }
};
export default connect(mapStateToProps)(LoginContainer);