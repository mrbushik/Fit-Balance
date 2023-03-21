import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};
const ContactUs: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example"));

  return (
    <div className="container">
      <div className="about__page-container">
        <h1 className="faq__main-title">CONTACT US</h1>
        <p className="contact-description">
          Please email us at
          <a href="mailto: support@fitnbalance.com">
            support@fitnbalance.com
          </a>{" "}
          if you have any questions. We will get back to you in under 24 hours.{" "}
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input defaultValue="test" {...register("example")} />
          {/* include validation with required or other standard HTML validation rules */}
          <input {...register("exampleRequired", { required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
