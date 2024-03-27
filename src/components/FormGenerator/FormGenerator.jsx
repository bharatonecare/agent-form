import React, { useEffect } from "react";
import "./FormGenerator.css";
import Radio from "../InputTypes/Radio/Radio";
import Checkbox from "../InputTypes/CheckBox/CheckBox";
import SingleSelectInput from "../InputTypes/SingleSelect/SingleSelectInput";
import ParagraphInput from "../InputTypes/ParagraphInput/ParagraphInput";
import FileInput from "../InputTypes/FileInput/FileInput";
import SimpleInput from "../InputTypes/SimpleInput/SimpleInput";
import PhoneNumberInput from "../InputTypes/PhoneInput/PhoneInput";
import MultipleSelect from "../InputTypes/MultiSelect/MultipleSelect";
import SearchableSelect from "../InputTypes/SearchableSelect/SearchableSelect";

const FormGenerator = (props) => {
  const isDisabled = props.disabled ? "disabled" : "";
  const [buttonValue, setButtonValue] = React.useState(
    // "Help me find the right hospital"
    "Contact Us"
  );
  useEffect(() => {
    if (props.language === "English") {
      setButtonValue("Contact Us");
    } else if (props.language === "Hindi") {
      setButtonValue("संपर्क करें");
    } else if (props.language === "Arabic") {
      setButtonValue("اتصل بنا");
    } else {
      setButtonValue("Contact Us");
    }
  }, [props.language]);
  // console.log("Diasbale value::", isDisabled);
  return (
    <div className="form-generator pb-2">
      <p className="d-flex text-section mt-xl-2 mt-3 ">{props.array.section}</p>
      {props.array.fields.map((item, index) => (
        <div key={index} className="inner-fields">
          {item.map(
            (
              ele,
              ind //uper wale div mei styling kar dio
            ) => {
              if (ele.render) {
                return ele.render(
                  props.formData,
                  props.handleChange,
                  props.handleTouch
                );
              }
              return (
                <div key={ind} className="field-container">
                  {ele.type === "tele" && (
                    <PhoneNumberInput
                      input={ele}
                      state={props.formData?.[ele.title]}
                      handleChange={props.handleChange}
                      handleTouch={props.handleTouch}
                    />
                  )}
                  {ele.type === "radio" && (
                    <Radio
                      input={ele}
                      state={props.formData?.[ele.title]}
                      handleChange={props.handleChange}
                      handleTouch={props.handleTouch}
                    />
                  )}
                  {ele.type === "checkbox" && (
                    <Checkbox
                      input={ele}
                      state={props.formData?.[ele.title]}
                      handleChange={props.handleChange}
                      handleTouch={props.handleTouch}
                    />
                  )}
                  {ele.type === "select" && (
                    <SingleSelectInput
                      input={ele}
                      state={props.formData?.[ele.title]}
                      handleChange={props.handleChange}
                      handleTouch={props.handleTouch}
                    />
                  )}
                  {ele.type === "searchable-select" && (
                    <SearchableSelect
                      input={ele}
                      state={props.formData?.[ele.title]}
                      handleChange={props.handleChange}
                      handleTouch={props.handleTouch}
                    />
                  )}
                  {ele.type === "multiple-select" && (
                    <MultipleSelect
                      input={ele}
                      state={props.formData?.[ele.title]}
                      handleChange={props.handleChange}
                      handleTouch={props.handleTouch}
                      optionData={props.optionData}
                      setOptionData={props.setOptionData}
                      selectedArray={props.selectedArray}
                      setSelectedArray={props.setSelectedArray}
                      setToRun={props.setToRun}
                      toRun={props.toRun}
                    />
                  )}
                  {ele.type === "para" && (
                    <ParagraphInput
                      input={ele}
                      state={props.formData?.[ele.title]}
                      handleChange={props.handleChange}
                      handleTouch={props.handleTouch}
                    />
                  )}
                  {ele.type === "file" &&
                    (props.formData.Accreditation &&
                    props.formData.Accreditation.value.includes(ele.tag) ? (
                      <FileInput
                        input={ele}
                        state={props.formData?.[ele.title]}
                        handleChange={props.handleChange}
                        handleTouch={props.handleTouch}
                        hidden={ele.hidden}
                      />
                    ) : ele.tag ? (
                      <></>
                    ) : (
                      <FileInput
                        input={ele}
                        state={props.formData?.[ele.title]}
                        handleChange={props.handleChange}
                        handleTouch={props.handleTouch}
                        hidden={ele.hidden}
                      />
                    ))}
                  {ele.type === "img" && (
                    <img
                      src={ele.src}
                      style={{
                        height: "100px",
                        width: "auto",
                        objectFit: "contain",
                      }}
                    />
                  )}
                  {ele.type !== "select" &&
                    ele.type !== "radio" &&
                    ele.type !== "checkbox" &&
                    ele.type !== "multiple-select" &&
                    ele.type !== "para" &&
                    ele.type !== "file" &&
                    ele.type !== "tele" &&
                    ele.type !== "table" &&
                    ele.type !== "searchable-select" && (
                      <SimpleInput
                        input={ele}
                        state={props.formData?.[ele.title]}
                        handleChange={props.handleChange}
                        handleTouch={props.handleTouch}
                      />
                    )}

                  {/* {ele.type === "table" && (
                    <TableComponent
                      input={ele}
                      setTableData={props.setTableData}
                      tableData={props.tableData}
                      state={props.formData?.[ele.title]}
                      handleChange={props.handleChange}
                      handleTouch={props.handleTouch}
                    />
                  )} */}
                </div>
              );
            }
          )}
        </div>
      ))}

      {props.landingPage ? (
        <>
          <div className="d-flex justify-content-end">
            <button className="btn btn-help" onClick={props.handleClick}>
              {buttonValue}
            </button>
          </div>
        </>
      ) : (
        <div className="btn-action d-flex justify-content-end">
          {props.arrayIndex !== 0 && (
            <button
              onClick={props.moveToPrev}
              className={`btn btn-back ms-3`}
              // disabled={props.disabled}
            >
              Back
            </button>
          )}
          <button
            onClick={props.isLast ? props.onSubmit : props.moveToNext}
            disabled={props.disabled}
            className={`btn btn-next ms-3 ${isDisabled}`}
          >
            {props.isLast ? "Submit" : "Next"}
          </button>
        </div>
      )}
    </div>
  );
};

export default FormGenerator;
