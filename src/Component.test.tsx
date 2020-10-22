import React from "react";

import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";

import { render } from "./test-utils";

import Component from "./Component";

describe("Inspection record component", () => {
  test("renders in English", () => {
    render(<Component />);

    const text = screen.queryByText(/test message/i);
    expect(text).toBeInTheDocument();

  });
});

