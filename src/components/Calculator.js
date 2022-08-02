import React from "react";
import Button from "./Button";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Button btnClass='' btnValue='AC'/>
      </div>
    );
  }
}

export default Calculator;
