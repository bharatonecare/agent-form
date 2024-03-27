import { render, screen } from "@testing-library/react";
import MultipleSelect from "./MultipleSelect";
describe("multiple-select-input-module", () => {
  const renderInput = () =>
    render(
      <MultipleSelect
        handleChange={() => {}}
        handleTouch={() => {}}
        state={{
          value: [],
          isTouched: true,
        }}
        input={{
          title: "Multiple Select",
          label: "Multiple Select",
          options: [
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
          type: "multiple-select",
          validation: function (value) {
            if (value === null || value === undefined) return false;
            if (value.length === 0) return false;
            return true;
          },
        }}
      />
    );
  const renderInput2 = () =>
    render(
      <MultipleSelect
        handleChange={() => {}}
        handleTouch={() => {}}
        state={{
          value: [],
          isTouched: false,
        }}
        input={{
          title: "Multiple Select",
          label: "Multiple Select",
          options: [
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
          type: "multiple-select",
          validation: function (value) {
            if (value === null || value === undefined) return false;
            if (value.length === 0) return false;
            return true;
          },
        }}
      />
    );

  const renderInput3 = () =>
    render(
      <MultipleSelect
        handleChange={() => {}}
        handleTouch={() => {}}
        state={{
          value: ["1", "2"],
          isTouched: true,
        }}
        input={{
          title: "Multiple Select",
          label: "Multiple Select",
          options: [
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
          type: "multiple-select",
          validation: function (value) {
            if (value === null || value === undefined) return false;
            if (value.length === 0) return false;
            return true;
          },
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
