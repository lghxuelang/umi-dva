import React, { Component } from "react";
import { Button } from "antd";
import { connect } from "dva";
import styles from './Weather.less';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: ""
    };
    this.getWeather = this.getWeather.bind(this);
  }
  getWeather() {
    this.props.dispatch({
      type: "app/getweather",
      value: "211"
    });
    this.setState({
      weather: this.props.app.weather
    });
  }
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.getWeather}>
          获取天气
        </Button>
        <div>{JSON.stringify(this.state.weather)}</div>
      </div>
    );
  }
}

export default connect(({ app }) => {
  return { app };
})(Weather);
