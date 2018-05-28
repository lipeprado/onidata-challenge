import React from "react";
import { shallow, mount } from "enzyme";
import expect, { spyOn, assert } from "expect";

import LoginContainer from "../components/Login/LoginContainer";

import logo from "../static/images/logo.png";
import LoginForm from "../components/Login/LoginForm";

const wrapper = shallow(<LoginContainer />);
const mountWrapper = mount(<LoginContainer />);
const formWrapper = mount(<LoginForm />);

describe("<LoginContainer/> Testing UI", () => {
  it("should render without throwing an error", () => {
    expect(wrapper.length).toEqual(1);
  });
  it("should exist img tag with logo on it", () => {
    expect(wrapper.exists(<img src={logo} />)).toBe(true);
  });
  it("should exist a form component", () => {
    expect(wrapper.exists(<LoginForm />)).toBe(true);
  });
});

describe("<LoginContainer/> Testing Functions", () => {
  it("should function handleInputChange exist", () => {
    expect(mountWrapper.instance().handleInputChange()).toExist;
  });
  it("should function handleInputChange return 'teste'", () => {
    expect(mountWrapper.instance().handleInputChange()).toEqual("teste");
  });
  it("should find button inside form button", () => {
    const button = formWrapper.find("button");
    expect(button.length).toEqual(1);
  });
});
