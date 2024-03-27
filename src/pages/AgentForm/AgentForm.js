import React from "react";
import FormGenerator from "../../components/FormGenerator/FormGenerator";
import { SERVER } from "../../constants/api";
import toast from "react-hot-toast";
import axios from "axios";
import "./AgentForm.css";

export const AgentForm = () => {
  const formConfig = {
    section: "Agent/Facilitator Details Submission",
    stepperHeader: "",
    fields: [
      [
        {
          title: "name",
          label: "Name",
          placeholder: "Enter Name",
          intitalValue: "",
          type: "text",
          required: true,
          validation: (input) => {
            return input?.length !== 0;
          },
          onChange: () => {},
          errorELe: "Required",
        },
        {
          title: "email",
          label: "Email",
          placeholder: "Enter Email",
          initialValue: "",
          type: "email",
          required: false,
          validation: (input) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return input.length ? emailRegex.test(input) : true;
          },
          onChange: () => {},
          errorELe: "Please enter a valid email address",
        },
      ],
      [
        {
          title: "contactNumber",
          label: "Contact Number",
          placeholder: "Enter Contact Number",
          intitalValue: { dialCode: "", phone: "" },
          type: "tele",
          required: true,
          validation: (input) => {
            const value = input?.phone?.slice(input?.dialCode?.length);
            return Boolean(value);
          },
          onChange: () => {},
          errorELe: "Required",
        },
        {
          title: "location",
          label: "Native Location",
          placeholder: "Enter the city or town you are originally from.",
          intitalValue: "",
          type: "text",
          required: false,
          validation: (input) => {
            return true;
          },
          onChange: () => {},
          errorELe: "Required",
        },
      ],
      [
        {
          title: "patientID",
          label: "Patient ID from Hospital",
          placeholder: "Enter the unique patient ID assigned by the hospital",
          intitalValue: "",
          type: "number",
          required: true,
          validation: (input) => {
            return input?.length !== 0;
          },
          onChange: () => {},
          errorELe: "Required",
        },
        {
          title: "payout",
          label: "Payout Received",
          placeholder: "Enter the amount of payout received, if any.",
          intitalValue: "0",
          type: "number",
          required: true,
          validation: (input) => {
            return input?.length !== 0;
          },
          onChange: () => {},
          errorELe: "Required",
        },
      ],
      [
        {
          title: "patientName",
          label: "Patient Name",
          placeholder: "Enter the patient name",
          intitalValue: "",
          type: "text",
          required: false,
          validation: (input) => {
            return true
          },
          onChange: () => {},
          errorELe: "Required",
        },
        {
          title: "patientHospital",
          label: "Hospital Name",
          placeholder: "Enter the hospital name",
          intitalValue: "",
          type: "text",
          required: false,
          validation: (input) => {
            return true
          },
          onChange: () => {},
          errorELe: "Required",
        },
      ],
      [
        {
          title: "query",
          label: "Tell us your remarks",
          placeholder: "Please enter your remarks here.",
          intitalValue: "",
          // type textarea
          type: "para",
          required: false,
          validation: (input) => {
            return true;
          },
        },
      ],
    ],
  };
  const intiFormData = {
    name: {
      value: "",
      isTouched: false,
    },
    email: {
      value: "",
      isTouched: false,
    },
    contactNumber: {
      value: "",
      isTouched: false,
    },
    location: {
      value: "",
      isTouched: false,
    },
    patientID: {
      value: "",
      isTouched: false,
    },
    patientName: {
      value: "",
      isTouched: false,
    },
    patientHospital: {
      value: "",
      isTouched: false,
    },
    payout: {
      value: "",
      isTouched: false,
    },
    query: {
      value: "",
      isTouched: false,
    },
  };

  const [formData, setFormData] = React.useState(intiFormData);

  const handleChange = (field, newValue) => {
    setFormData((obj) => {
      let tempObj = { ...obj };
      tempObj[field] = { ...tempObj[field], value: newValue };
      return tempObj;
    });
  };

  const handleTouch = (field) => {
    setFormData((obj) => {
      const tempObj = { ...obj };
      tempObj[field] = { ...tempObj[field], isTouched: true };
      return tempObj;
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const url = `${SERVER}/agent-form.json`;
    let reqBody = {};
    Object.keys(formData).forEach((ele) => {
      reqBody = {
        ...reqBody,
        [ele]: formData[ele].value,
      };
    });
    toast.promise(axios.post(url, reqBody), {
      loading: "Sending...",
      success: "Thanks for contacting us.",
      error: "Something went wrong.",
    });
  };

  return (
    <div className="agent-form-container">
      <div className="agent-form">
        <FormGenerator
          arrayIndex={0}
          array={formConfig}
          handleChange={handleChange}
          handleTouch={handleTouch}
          formData={formData}
          isLast
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};
