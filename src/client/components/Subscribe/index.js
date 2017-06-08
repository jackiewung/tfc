import React, { PureComponent } from 'react';

import xButton from '../../../../public/assets/x.png';

import './Subscribe.scss';

class Subscribe extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false
    }
  }

  handleSubmit = () => {
    this.setState({ submitted: true });
  }

  render() {
    return (
      <div className="Subscribe">
        <div className="Subscribe__modal">
          <form action="//twitter.us6.list-manage.com/subscribe/post?u=530249d8d9340a3d9ef73045c&amp;id=1f481cf6eb" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate onSubmit={this.handleSubmit}>
              <div id="mc_embed_signup_scroll">
            <div onClick={this.props.turnOff}><img src={xButton} className="Subscribe__close" alt="Close" /></div>
            {
              this.state.submitted && <p>Thank you for subscribing!</p>
            }
            {
              !this.state.submitted &&
              <div>
                <h1><label htmlFor="mce-EMAIL">Subscribe to our mailing list</label></h1>
                <span className="Subscribe__form">
                  <input type="email" name="EMAIL" className="email Subscribe__input" id="mce-EMAIL" placeholder="email address" required />
                  <div style={{"position": "absolute", "left": "-5000px"}} aria-hidden="true">
                    <input type="text" name="b_530249d8d9340a3d9ef73045c_1f481cf6eb" tabIndex="-1" />
                  </div>
                  <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button Subscribe__submit" /></div>
                </span>
              </div>
            }
                </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Subscribe;
