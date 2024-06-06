// Form2.js
import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const Form2 = ({ onSubmit, defaultValues, handleBack }) => {
  const { register, handleSubmit, control } = useForm({ defaultValues });


  return (
    <>
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <object type="image/svg+xml" data="file.svg" >
          <span className="errorSpan" >Your browser does not support SVG!</span>
        </object>
        <hr
          style={{
            width: "100%",
            color: "grey",
            border: '1px solid rgba(0, 0, 0, 0.12)'
          }}
        />
        <input
          type="checkbox"
          id="animalWelfareInput"
          {...register("animalWelfareInput")}
        />
        <label htmlFor="animalWelfareInput">
          I certify, by signing the above statement, that if at any time during my visit I witness signs of animal abuse of
          neglect I will report the incident immediately to Door Access System or via the
          Door Access System Animal Welfare Hotline. If I have any questions regarding this information or something I saw, I will speak to a member of Door Access System within 24 hours.
        </label>

        <h2>Signature</h2>
        <div className="signature-div">
          <p>Tap To Sign</p>
        </div>
        <div className="button-group">
          <button onClick={handleBack} className="back-button-50">Back</button>
          <button type="submit" className="next-button-50">Next</button>
        </div>


      </form>
      <DevTool control={control} />
    </>
  );
};

export default Form2;
