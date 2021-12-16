import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<Event /> component", () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[1]} />);
  });

  test("Render summary", () => {
    expect(EventWrapper.find(".summary")).toHaveLength(1);
  });

  test("Render location", () => {
    expect(EventWrapper.find(".location")).toHaveLength(1);
  });

  test("Render date and timezone", () => {
    expect(EventWrapper.find(".start-date")).toHaveLength(1);
  });

  test("Render show/hide details button", () => {
    expect(EventWrapper.find(".show-details")).toHaveLength(1);
  });

  test("event element is collapsed by default", () => {
    expect(EventWrapper.state("collapsed")).toBe(true);
  });

  test("click on show details button to expand event details", () => {
    EventWrapper.setState({
      collapsed: true,
    });
    EventWrapper.find(".show-details").simulate("click");
    expect(EventWrapper.state("collapsed")).toBe(false);
  });

  test("click on hide details button to hide event details", () => {
    EventWrapper.setState({
      collapsed: false,
    });
    EventWrapper.find(".hide-details").simulate("click");
    expect(EventWrapper.state("collapsed")).toBe(true);
  });
});
