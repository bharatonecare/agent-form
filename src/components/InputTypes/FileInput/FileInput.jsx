import React, { useState } from "react";
import "./FileInput.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import upload from "../../../assets/images/upload.png";
import greenTick from "../../../assets/images/green-tick.png";
import closeIcon from "../../../assets/images/cross-icon-final.svg";
// import { useTranslation } from "react-i18next";

const FileInput = (props) => {
  const inValid =
    props.input?.validation(props.state?.value) === false &&
    props.state?.isTouched === true;
  // const { i18n, t } = useTranslation(["translation"]);
  const findDoctype = (state) => {
    console.log(state);
    const allowedDoctype = [
      "image/jpeg",
      "image/png",
      "image/jpg",
      "application/pdf",
    ];
    if (allowedDoctype.includes(state?.type)) {
      return false;
    } else {
      return true;
    }
  };

  const photoSelect = props.input?.validation(props.state.value);

  return (
    <div
      className={`mb-3 ${
        props.hidden ? "form-input-hidden" : "d-block"
      } position-relative`}
    >
      <label htmlFor={props.input.titlte} className="form-label d-flex mb-1">
        {props.input.label}
        {props.input.required && <span style={{ color: "red" }}>*</span>}
      </label>
      {photoSelect && (
        <img
          src={closeIcon}
          onClick={(event) => props.handleChange(props.input.title, null)}
          className="file-input-close-icon"
          alt="X"
        />
      )}
      <button className="btn btn-uploade border d-flex align-items-center">
        {/* <FontAwesomeIcon className="upload-icon ms-2"
          icon={faArrowUpFromBracket} /> */}
        <img src={photoSelect ? greenTick : upload} alt="" />
        {props.input.validation(props.state?.value) ? (
          <label className="form-label upload-text">
            {props.state?.value?.name}
          </label>
        ) : (
          <label className="form-label upload-text">Upload File</label>
        )}
        <input
          type={props.input.type}
          name={props.input.title}
          onChange={(event) => {
            const notAllowed = findDoctype(event.target.files?.[0]);
            console.log(notAllowed);
            if (notAllowed) {
              alert("File type not allowed");
            } else {
              props.handleChange(props.input.title, event.target.files?.[0]);
            }
          }}
          onBlur={() => {
            props.handleTouch(props.input.title);
          }}
          className="from-control file-input"
        />
      </button>

      {inValid && (
        <p
          data-testid="errorElement"
          className="validate-text text-danger mb-0 ms-1"
        >
          {props.input.errorELe}
        </p>
      )}

      {/* Reference */}
      {/* <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form> */}
    </div>
  );
};

export default FileInput;
