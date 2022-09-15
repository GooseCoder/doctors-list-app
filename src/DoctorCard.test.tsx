import React from "react";
import { render } from "@testing-library/react";
import DoctorCard from "./DoctorCard";
jest.mock("./api/services/doctor");

describe("Doctor Card", () => {
  const mockDoctor = {
    npi: "zjd7492",
    first_name: "Lara",
    last_name: "Decter",
    title: "PA",
    scheduling_enabled: false,
    image_url:
      "https://2k13vh13cuiw33o3102gklib-wpengine.netdna-ssl.com/wp-content/uploads/2021/03/Lara-Decter-200x200-1-200x200.jpg",
    primary_specialty: {
      specialty: "Dermatology",
      id: 1,
    },
    procedures: [
      {
        id: 3,
        procedure: "Laser Hair Removal",
      },
      {
        id: 2,
        procedure: "Chemical Peel",
      },
    ],
  };

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should render all initial filters", async () => {
    const { getByText } = render(<DoctorCard doctor={mockDoctor} />);
    expect(getByText("Lara Decter (PA)")).toBeInTheDocument();
    expect(getByText("Dermatology")).toBeInTheDocument();
    expect(getByText("Laser Hair Removal")).toBeInTheDocument();
    expect(getByText("Chemical Peel")).toBeInTheDocument();
  });
});
