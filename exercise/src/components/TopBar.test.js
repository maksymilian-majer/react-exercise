import React from "react";
import { shallow, mount } from "enzyme";

import { TopBar } from "./TopBar";

const setup = propOverrides => {
  const defaultProps = {
    loggedIn: false,
    history: {
      location: {
        pathname: "/"
      }
    },
    classes: {
      root: "root",
      loginButton: "login"
    }
  };
  const props = Object.assign(defaultProps, propOverrides);
  const component = shallow(<TopBar {...props} />);

  return { props, component, mount };
};

describe("(Component) Top Bar", () => {
  it("should render correctly when logged out", () => {
    const { component } = setup();
    expect(component).toMatchSnapshot();
  });

  it("should render correctly when logged in", () => {
    const { component } = setup({
      loggedIn: true,
      initials: "AB"
    });
    expect(component).toMatchSnapshot();
  });

  describe("login button", () => {
    it("should call log in on click", () => {
      const loginMock = jest.fn();
      const { component } = setup({
        logIn: loginMock
      });
      const loginButton = component.find(".login");
      loginButton.simulate("click");

      expect(loginMock).toBeCalledWith("MM");
    });
  });
});
