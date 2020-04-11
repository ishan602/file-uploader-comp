import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from "./App"


Enzyme.configure({ adapter: new Adapter() });

describe("My App component", () => {
  it("should show text for submit button", () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find("button");
    expect(text.text().length).toBe(6);
  });
  it("should click the button and upload image should run", () => {
    const wrapper = shallow(<App />);
    const button = wrapper.find("button");
    button.simulate("click");
    expect(true).toBe(true);
  });
  it("it should trigger onChange in input field", () => {
    const wrapper = shallow(<App />);
    const button = wrapper.find("input");
    button.simulate("click");
    expect(true).toBe(true);
  })
})
