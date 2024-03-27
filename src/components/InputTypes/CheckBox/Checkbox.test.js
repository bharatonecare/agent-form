import { render, screen } from "@testing-library/react";
import Checkbox from "./CheckBox";
describe("checkbox-input-module", () => {
  const renderInput = () =>
    render(
      <Checkbox
        handleChange={() => {}}
        handleTouch={() => {}}
        state={{
          value: [],
          isTouched: true,
        }}
        input={{
          title: "Check-box",
          label: "Check-box",
          checkboxFields: [
            {
              title: "1",
              value: "1",
            },
            {
              title: "2",
              value: "2",
            },
          ],
          placeholder: "",
          type: "check",
          validation: () => {},
        }}
      />
    );
  const renderInput2 = () =>
    render(
      <Checkbox
        handleChange={() => {}}
        handleTouch={() => {}}
        state={{
          value: [],
          isTouched: false,
        }}
        input={{
          title: "Check-box",
          label: "Check-box",
          checkboxFields: [
            {
              title: "1",
              value: "1",
            },
            {
              title: "2",
              value: "2",
            },
          ],
          placeholder: "",
          type: "check",
          validation: () => {},
        }}
      />
    );

  const renderInput3 = () =>
    render(
      <Checkbox
        handleChange={() => {}}
        handleTouch={() => {}}
        state={{
          value: ["1", "2"],
          isTouched: true,
        }}
        input={{
          title: "Check-box",
          label: "Check-box",
          checkboxFields: [
            {
              title: "1",
              value: "1",
            },
            {
              title: "2",
              value: "2",
            },
          ],
          placeholder: "",
          type: "check",
          validation: () => {},
        }}
      />
    );

  test("renders error message when input is not valid", () => {
    renderInput();
    expect(screen.getByTestId("errorElement")).toBeInTheDocument();
  });

  test("renders no error message when input is not touched", () => {
    renderInput2();
    expect(screen.queryByTestId("errorElement")).not.toBeInTheDocument();
  });

  test("renders no error message when input is valid", () => {
    renderInput3();
    expect(screen.queryByTestId("errorElement")).not.toBeInTheDocument();
  });
});
