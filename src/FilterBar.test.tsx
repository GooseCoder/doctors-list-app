import React from "react";
import { fireEvent, render } from "@testing-library/react";
import FilterBar from "./FilterBar";
import { getDoctors } from "./api/services/doctor";
jest.mock("./api/services/doctor");

describe("Filters Bar", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should render all initial filters", async () => {
    const { getByPlaceholderText } = render(<FilterBar />);
    expect(getByPlaceholderText("Procedures")).toBeInTheDocument();
    expect(getByPlaceholderText("Scheduling enabled")).toBeInTheDocument();
    expect(getByPlaceholderText("Name ...")).toBeInTheDocument();
  });

  it("should assemble filters and retrieve the data from the backend", async () => {
    const { getByPlaceholderText } = render(<FilterBar />);
    const proceduresField = getByPlaceholderText("Procedures");
    fireEvent.change(proceduresField, { target: { value: "Botox" } });
    const schedulingEnabledField = getByPlaceholderText("Scheduling enabled");
    fireEvent.change(schedulingEnabledField, { target: { value: "YES" } });
    const nameField = getByPlaceholderText("Name ...");
    fireEvent.change(nameField, { target: { value: "Rachel" } });
    expect(getDoctors).toHaveBeenCalledTimes(2);
  });
});
