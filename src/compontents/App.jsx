import React, { Component } from "react";
import { Rate, Tabs } from "antd";
import { connect } from "dva";
import Weather from '../compontents/weather/Weather'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const TabPane = Tabs.TabPane;
    return (
      <div>
        <div className="card-container">
          <Tabs type="card">
            <TabPane tab="Tab Title 1" key="1">
              hi umi + dva!
              <Rate allowHalf defaultValue={2.5} />
            </TabPane>
            <TabPane tab="Tab Title 2" key="2">
              <p>Content of Tab Pane 2</p>
              <p>Content of Tab Pane 2</p>
              <p>Content of Tab Pane 2</p>
            </TabPane>
            <TabPane tab="Tab Title 3" key="3">
              <Weather />
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default connect(({ app }) => {
  return { app };
})(App);
