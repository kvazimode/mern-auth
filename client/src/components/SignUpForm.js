import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import {Card, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

const SignUpForm = ({
    onSubmit,
    onChange,
    errors,
    users,
}) => (
    <Card classname='container'>
        <form action='/' onSubmit={onSubmit}>
            <h2 classname='card-heading'>Sign Up </h2>
            
            {errors.summary && <p classname='error-message'>{errors.summary}</p>}
            
            <div classname='field-line'>
                <TextField
                    floatingLabelText='Name'
                    name='name'
                    errorText={errors.name}
                    onChange={onChange}
                    value={user.name}
                />
            </div>
    
            <div classname='field-line'>
                <TextField
                    floatingLabelText='Email'
                    name='email'
                    errorText={errors.email}
                    onChange={onChange}
                    value={user.email}
                />
            </div>
            
            <div classname='field-line'>
                <TextField
                    floatingLabelText='Password'
                    type='password'
                    name='password'
                    onChange={onChange}
                    errorText={errors.password}
                    value={user.password}
                />
            </div>
    
            <CardText>Already have an account? <Link to={'/login'}>Log in</Link></CardText>
        </form>
    </Card>
)

SignUpForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
}

export default SignUpForm