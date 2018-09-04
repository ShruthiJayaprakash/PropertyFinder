import React from 'react';
import Input from './global/Input';
import Button from './global/Button';
import PropTypes from 'prop-types';

export default class LoginComponent extends React.Component {
    // constructor(props){
    //     super(props);
    //    this.handleSubmit = this.handleSubmit.bind(this);
    // }

    // handleSubmit(e){
    //     console.log("hereee???")
    //     e.preventDefault();
    //     console.log(e.target.email.value);
    //     console.log(e.target.password.value);
    //     this.props.isSubmitForm(e)
    // }

    render() {
        // if(this.props.isLoggedIn || localStorage.getItem('isLoggedIn')){
        //     return <DashboardComponent />;
        // }
        if ( this.props.isLoggedIn ) {
            alert("logged in successfully!!!")
        }
        return (
            <div className="login-form-container">

                <h1 className="center-align">Login {}</h1>
                <form className='formcls' onSubmit={this.props.isSubmitForm} >
                    <div className="form-group">
                        <Input label="Email" clsName="form-control" placeHolder="Enter Email" name="email" RequiredField={true} />
                        <div />
                        <div className="form-group">
                            <Input label="Password" clsName="form-control" inputType="password" placeHolder="Enter Password" name="password" RequiredField={true} autoComplete={false} />
                        </div>
                    </div>
                    <div className="clearfix">
                        <Button inputType="submit" clsName="btn btn-primary" name="login" value="Login" />

                    </div>
                </form>

            </div>
        );
    }
}

LoginComponent.defaultProps = {
    isLoggedIn: false
}

Input.propTypes = {
    isLoggedIn: PropTypes.bool,
    isSubmitForm: PropTypes.func
}