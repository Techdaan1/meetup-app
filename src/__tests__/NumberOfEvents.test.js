import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test("render textbox input", () => {
    expect(NumberOfEventsWrapper.find(".newValue")).toHaveLength(1);
  });

  test("Change event on textbox", () => {
    expect(NumberOfEventsWrapper);
  });
});
