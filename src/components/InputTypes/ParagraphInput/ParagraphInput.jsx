// import { useTranslation } from "react-i18next";
import "./ParagraphInput.css";

const ParagraphInput = (props) => {
  // const { i18n, t } = useTranslation(["translation"]);
  const inValid =
    props.input.validation(props.state?.value) === false &&
    props.state?.isTouched === true;
  return (
    <div className="simple-input d-blocks mb-3">
      <label
        htmlFor={props.input.title}
        className="form-label d-flex mb-1 ms-1"
      >
        {/* {props.input.label} */}
        {props.input.label}
        {props.input.required && <span style={{ color: "red" }}>*</span>}
      </label>
      <textarea
        rows={props.input.rows}
        cols={props.input.cols}
        placeholder={props.input.placeholder}
        name={props.input.title}
        value={props.state?.value ? props.state?.value : ""}
        onChange={(event) => {
          props.handleChange(props.input.title, event.target.value);
        }}
        onBlur={() => {
          props.handleTouch(props.input.title);
        }}
        className="form-control simple-field"
      ></textarea>
      {inValid && (
        <p
          className="validate-text text-danger mb-0 ms-1"
          data-testid="errorElement"
        >
          please enter a non empty text or N/A
        </p>
      )}
    </div>
  );
};

export default ParagraphInput;
