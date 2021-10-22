import React, { Component } from "react";
import Stat from "./Stat";

export default class Basics extends Component {
  render() {
    let { data, hasData } = this.props;
    if (!hasData) {
      return <div className="basics">
        <h4>Basics</h4>
        <div>Division has no units</div>
      </div>
    }
    return <div className="basics">
      <h4>Basics</h4>
      <ul>
        {
          data.map(([name, value, tooltipData]) => <Stat key={name} {...{name, value, tooltipData}} />)
        }
      </ul>
    </div>
  }
}
