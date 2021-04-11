import React, { Component } from 'react';

const widgetUrl = 'https://app.mailjet.com/widget/iframe/4ezi/ItX';

export class EmailForm extends Component {
  constructor() {
    super();
    this.state = { message: '' };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ message: 'Thank you!' });
    setTimeout(() => {
      this.setState({ message: '' });
    }, 3000);
  }

  render() {
    const { message } = this.state;
    return (
      <form id="signup-form" onSubmit={this.onSubmit} method="post" action="#">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          required="required"
        />
        <input type="submit" value="Sign Up" />
        <span className={`${message ? 'visible success' : ''} message`}>
          {message}
        </span>
        <input id="w-preview-consent-checkbox" type="checkbox" name="w-preview-consent-checkbox" required="required" />
        <label style={{position: 'fixed', margin: '68px 0 0 0'}} htmlFor="w-preview-consent-checkbox">I agree to receive this newsletter and know that I can easily unsubscribe at any time.</label>
      </form>
    );
  }
}

export default EmailForm;
