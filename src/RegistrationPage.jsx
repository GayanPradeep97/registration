import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class RegistrationPage extends Component {
    
  static propTypes = {
    
  }

  render() {
    return (
        <div>
        <h1>Register</h1>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" />
          </label>
          <br />
          <label>
            Confirm Password:
            <input type="password" name="confirmPassword" />
          </label>
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    );
    
  }
}

export default RegistrationPage