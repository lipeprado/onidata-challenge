import React from "react";
import { mount } from "enzyme";
import expect from "expect";

import { LoginContainer as Login } from "../components/Login/LoginContainer";
import { LoginForm as FormLogin } from "../components/Login/LoginForm";

import logo from "../static/images/logo.png";

const mountWrapper = mount(<Login actions={{}} />);
const formWrapper = mount(
  <FormLogin onChange={() => {}} onSubmit={() => {}} actions={{}} />
);

describe("<Login/> Testing UI", () => {
  it("should render without throwing an error", () => {
    expect(mountWrapper.length).toEqual(1);
  });
  it("should exist img tag with logo on it", () => {
    expect(mountWrapper.exists(<img src={logo} />)).toBe(true);
  });
  it("should exist a form component", () => {
    expect(
      mountWrapper.exists(
        <FormLogin onChange={() => {}} onSubmit={() => {}} actions={{}} />
      )
    ).toBe(true);
  });
  it("should exist a 2 input inside form Login", () => {
    expect(formWrapper.find("input").length).toEqual(2);
  });
  it("should exist a 2 input inside form Login", () => {
    expect(formWrapper.find("input").length).toEqual(2);
  });
});

describe("<LoginContainer/> Testing Functions", () => {
  it("should find button inside form button", () => {
    const button = formWrapper.find("button");
    expect(button.length).toEqual(1);
  });
});
