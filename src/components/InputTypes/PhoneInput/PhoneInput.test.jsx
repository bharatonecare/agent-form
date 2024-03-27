import PhoneNumberInput from "./PhoneInput";

import { render, screen } from "@testing-library/react";

describe("phone-input-module", () => {
  const renderInput = () =>
    render(
      <PhoneNumberInput
        handleChange={() => {}}
        handleTouch={() => {}}
        state={{
          value: {
            phone: "91",
            dialCode: "91",
          },
          isTouched: true,
        }}
        input={{
          label: "label",
          placeholder: "placeholder",
          title: "title",
          type: "tele",
          validation: (input) => {
            const value = input?.phone?.slice(input?.dialCode?.length);
            const phoneno = /^\d{10}$/;
            if (value?.match(phoneno)) {
              return true;
            } else {
              return false;
            }
          },
        }}
      />
    );
  const renderInput2 = () =>
    render(
      <PhoneNumberInput
        handleChange={() => {}}
        handleTouch={() => {}}
        state={{
          value: {
            phone: "911234",
            dialCode: "91",
          },
          isTouched: true,
        }}
        input={{
          label: "label",
          placeholder: "placeholder",
          title: "title",
          type: "text",
          validation: (input) => {
            const value = input?.phone?.slice(input?.dialCode?.length);
            const phoneno = /^\d{10}$/;
            if (value?.match(phoneno)) {
              return true;
            } else {
              return false;
            }
          },
        }}
      />
    );

  const renderInput3 = () =>
    render(
      <PhoneNumberInput
        handleChange={() => {}}
        handleTouch={() => {}}
        state={{
          value: {
            phone: "911231231231",
            dialCode: "91",
          },
          isTouched: true,
        }}
        input={{
          label: "label",
          placeholder: "placeholder",
          title: "title",
          type: "text",
          validation: (input) => {
            const value = input?.phone?.slice(input?.dialCode?.length);
            const phoneno = /^\d{10}$/;
            if (value?.match(phoneno)) {
              return true;
            } else {
              return false;
            }
          },
        }}
      />
    );

  const renderInput4 = () =>
    render(
      <PhoneNumberInput
        handleChange={() => {}}
        handleTouch={() => {}}
        state={{
          value: {
            phone: "",
            dialCode: "91",
          },
          isTouched: false,
        }}
        input={{
          label: "label",
          placeholder: "placeholder",
          title: "title",
          type: "text",
          validation: (input) => {
            const value = input?.phone?.slice(input?.dialCode?.length);
            const phoneno = /^\d{10}$/;
            if (value?.match(phoneno)) {
              return true;
            } else {
              return false;
            }
          },
        }}
      />
    );

  test("renders error message when input is not given but is touched", () => {
    renderInput();
    expect(screen.getByTestId("errorElement")).toBeInTheDocument();
  });

  test("renders error message when input is not valid", () => {
    renderInput2();
    expect(screen.queryByTestId("errorElement")).toBeInTheDocument();
  });

  test("renders no error message when input is valid", () => {
    renderInput3();
    expect(screen.queryByTestId("errorElement")).not.toBeInTheDocument();
  });

  test("renders no error message when input is not touched", () => {
    renderInput4();
    expect(screen.queryByTestId("errorElement")).not.toBeInTheDocument();
  });
});
