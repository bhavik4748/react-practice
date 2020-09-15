import React, { Component } from "react";
import MyFunction from './MyFunction';

class MyClassComponent extends Component {
  render() {
    return (
      <div>
        <p>Here is a paragraph</p>
       <MyFunction />
      </div>
    );
  }
}

export default MyClassComponent;
