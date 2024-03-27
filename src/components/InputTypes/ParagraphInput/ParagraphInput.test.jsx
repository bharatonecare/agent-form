import { render, screen } from "@testing-library/react";
import ParagraphInput from "./ParagraphInput";
describe("paragraph-input-module", () => {
  const renderInput = () =>
    render(
      <ParagraphInput
        handleChange={() => {}}
        handleTouch={() => {}}
        state={{
          value: "",
          isTouched: true,
        }}
        input={{
          label: "label",
          placeholder: "placeholder",
          title: "title",
          type: "text",
          validation: (input) => {
            return input.length !== 0;
          },
        }}
      />
    );
  const renderInput2 = () =>
    render(
      <ParagraphInput
        handleChange={() => {}}
        handleTouch={() => {}}
        state={{
          value: "",
          isTouched: false,
        }}
        input={{
          label: "label",
          placeholder: "placeholder",
          title: "title",
          type: "text",
          validation: (input) => {
            return input.length !== 0;
          },
        }}
      />
    );

  const renderInput3 = () =>
    render(
      <ParagraphInput
        handleChange={() => {}}
        handleTouch={() => {}}
        state={{
          value: "123",
          isTouched: true,
        }}
        input={{
          label: "label",
          placeholder: "placeholder",
          title: "title",
          type: "text",
          validation: (input) => {
            return input.length !== 0;
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
