import { getDoctors } from "./doctor";

describe("Doctor service", () => {
  it("should retrieve all the data without filters", () => {
    const result = getDoctors({});
    expect(result).toHaveLength(5);
  });

  it("should return only doctors with the scheduling enabled ", () => {
    const result = getDoctors({ schedulingEnabled: true });
    expect(result).toHaveLength(3);
  });

  it("should return only doctors with a filter name ", () => {
    const result = getDoctors({ name: "Rachel" });
    expect(result).toHaveLength(1);
  });

  it("should return only doctors with a procedure", () => {
    const combined = getDoctors({
      procedures: ["Botox", "Laser Hair Removal"],
    });
    expect(combined).toHaveLength(4);
    const single = getDoctors({ procedures: ["Botox"] });
    expect(single).toHaveLength(3);
  });

  it("should return only doctors with a combined filter", () => {
    const combined = getDoctors({
      procedures: ["Cool Sculpting"],
      name: "Emily",
    });
    expect(combined).toHaveLength(1);
    const single = getDoctors({
      procedures: ["Botox"],
      schedulingEnabled: false,
    });
    expect(single).toHaveLength(1);
  });
});
