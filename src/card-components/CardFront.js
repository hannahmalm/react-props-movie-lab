import React, { Component } from 'react';

export default class CardFront extends Component {


  //uses the poster prop as a background image, rendering only necessary HTML
  render() {
    return (
      <div className="card-front" style={{backgroundImage: `url(${this.props.poster})`}}>
      </div>
    )
  }
}
