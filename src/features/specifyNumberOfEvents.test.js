import React from "react";
import { shallow, mount } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";
import App from "../App";
import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn’t specified a number, 32 is the default number", ({
    given,
    when,
    then,
  }) => {
    given("the user is on the home page", () => {});

    let NumberOfEventsWrapper;
    when(
      "the user does not specify the number of events they want to see",
      () => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
      }
    );

    then("the default number of 32 will be", () => {
      NumberOfEventsWrapper.setState({ numberOfEvents: 32 });
    });
  });

  test("user can change the number of events they want to see", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given("the user is on the home page", () => {
      AppWrapper = mount(<App />);
    });

    when("the user has specified the number of events they want to see", () => {
      const eventNumberInput = { target: { value: 6 } };
      AppWrapper.find(".new-number-of-events").simulate(
        "change",
        eventNumberInput
      );
    });

    then("that specified number will be shown", () => {
      const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
      NumberOfEventsWrapper.setState({ numberOfEvents: 6 });
      expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(6);
    });
  });
});
