import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { loginUser } from '../../actions';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

const style = {
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    padding: 20
};

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
            <Paper style={style} zDepth={2}>
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
                <div className="register-link">
                    <Link to="register">Or register</Link>
                </div>
            </Paper>
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
