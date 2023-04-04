import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  name: string;
  email: string;
  phone: number;
  message: number;
}
const ContactUs: React.FC = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <div className="container">
      <div className="about__page-container">
        <h1 className="faq__main-title">CONTACT US</h1>
        <p className="contact-description">
          Please email us at
          <a href="mailto: support@fitnbalance.com">support@fitnbalance.com</a>
          if you have any questions. We will get back to you in under 24 hours.{" "}
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="contact__input-group">
            <div className=" text-field text-field_floating-2 contact__input-wrapper">
              <input
                className="text-field__input"
                type="name"
                placeholder="name"
                {...register("name", { required: true })}
              />
              <label className="text-field__label" htmlFor="name">
                Name
              </label>
            </div>
            <div className=" text-field text-field_floating-2 contact__input-wrapper">
              <input
                className="text-field__input"
                type="email"
                placeholder="email"
                {...register("email", {
                  required: true,
                  pattern:
                    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                })}
              />
              <label className="text-field__label" htmlFor="email">
                Email
              </label>
            </div>
          </div>
          <div className=" text-field text-field_floating-2">
            <input
              className="text-field__input"
              type="phone"
              placeholder="phone"
              {...register("phone")}
            />
            <label className="text-field__label" htmlFor="phone">
              Phone
            </label>
          </div>
          <div className=" text-field text-field_floating-2 contact__area-label">
            <textarea
              className="text-field__input contact__area-text"
              placeholder="message"
              {...register("message", {
                required: true,
              })}
            ></textarea>
            <label className="text-field__label " htmlFor="message">
              Message
            </label>
          </div>

          <div className="contact__submit-btn" onClick={handleSubmit(onSubmit)}>
            Send
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
