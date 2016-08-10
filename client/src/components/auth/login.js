import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { loginUser } from '../../actions';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const form = reduxForm({
    form: 'login',
    fields: ['email', 'password']
});

const renderTextField = field => (
    <TextField hintText={field.input.label}
        floatingLabelText={field.input.label}
        errorText={field.touched && field.error}
        {...field.input}
    />
)

const renderPasswordField = field => (
    <TextField hintText={field.input.label}
        floatingLabelText={field.input.label}
        errorText={field.touched && field.error}
        {...field.input}
        type="password"
    />
)

class Login extends Component {
    handleFormSubmit(formProps) {
        console.log(formProps);
        this.props.loginUser(formProps);
    }

    renderAlert() {
        if(this.props.errorMessage) {
            return (
                <div>
                    <span><strong>Error!</strong> {this.props.errorMessage}</span>
                </div>
            );
        }
    }

    render() {
        const { fields: {password, email}, handleSubmit } = this.props;

        return (
            <div>
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                    {this.renderAlert()}
                    <div>
                        <Field name="email" component={renderTextField} label="Email"/>
                    </div>
                    <div>
                        <Field name="password" component={renderPasswordField} label="Password"/>
                    </div>
                    <RaisedButton
                        label="Login"
                        primary={true}
                        type="submit"
                    />
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.error,
        message: state.auth.message,
        authenticated: state.auth.authenticated
    };
}

export default connect(mapStateToProps, { loginUser })(form(Login));
