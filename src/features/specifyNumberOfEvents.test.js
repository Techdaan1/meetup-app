import React from "react";
import { shallow } from "enzyme";
import { mockData } from "../mock-data";
import EventList from "../EventList";
import Event from "../Event";
import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn’t specified a number, 32 is the default number", ({
    given,
    when,
    then,
  }) => {
    given("the user is on the home page", () => {});

    when(
      "the user does not specify the number of events they want to see",
      () => {}
    );

    then("the default number of 32 will be", () => {});
  });

  test("User can change the number of events they want to see", ({
    given,
    when,
    then,
  }) => {
    given("the user is on the home page", () => {});

    when(
      "the user has specified the number of events they want to see",
      () => {}
    );

    then("that specified number will be shown", () => {});
  });
});
