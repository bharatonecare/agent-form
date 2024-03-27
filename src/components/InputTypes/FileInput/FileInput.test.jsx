import { render, screen } from "@testing-library/react";
import FileInput from "./FileInput";
describe("file-input-module", () => {
  const renderInput = () =>
    render(
      <FileInput
        handleChange={() => {}}
        handleTouch={() => {}}
        state={{
          value: "",
          isTouched: true,
        }}
        input={{
          title: "PAN CARD",
          label: "Pan Card",
          placeholder: "",
          type: "file",
          validation: (value) => {
            if (value === null || value === undefined) return false;
            if (value === "") return false;
            return true;
          },
        }}
      />
    );
  const renderInput2 = () =>
    render(
      <FileInput
        handleChange={() => {}}
        handleTouch={() => {}}
        state={{
          value: "",
          isTouched: false,
        }}
        input={{
          title: "PAN CARD",
          label: "Pan Card",
          onChange: () => {},
          placeholder: "",
          type: "file",
          validation: (value) => {
            if (value === null || value === undefined) return false;
            if (value === "") return false;
            return true;
          },
        }}
      />
    );

  const renderInput3 = () =>
    render(
      <FileInput
        handleChange={() => {}}
        handleTouch={() => {}}
        state={{
          value: "123",
          isTouched: true,
        }}
        input={{
          title: "PAN CARD",
          label: "Pan Card",
          onChange: () => {},
          placeholder: "",
          type: "file",
          validation: (value) => {
            if (value === null || value === undefined) return false;
            if (value === "") return false;
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
