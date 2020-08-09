import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (           
            <div className="col-md-6 col-md-offset-3">
                <a href="/"><img className="logo" alt="logo"src='data:image/png;base64,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' /></a>
                
                <h2 className="lead">React JWT Authentication</h2>
                <div className="alert alert-info">
                    Username: yobetit<br />
                    Password: yobetit
                </div>
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>
                        {loggingIn &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage }; 