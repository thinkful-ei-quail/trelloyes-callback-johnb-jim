import Card from "./Card";
import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import List from "./List";

describe("Card", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders to UI as expected", () => {
    const tree = renderer
      .create(<Card title="Something" content="something else" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
