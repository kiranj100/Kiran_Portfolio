import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  message: yup.string().required("Message is required"),
});

function Contact() {
  const formRef = useRef();

  // Function to send email using EmailJS
  const sendEmail = (values, { resetForm }) => {
    emailjs
      .sendForm(
        "service_kd9bxjp",
        "template_nyejv2n",
        formRef.current,
        "Ijq68cTwfeSjj0_bx"
      )
      .then(
        () => {
          toast.success("Message Sent Successfully 😊");
          resetForm();
        },
        (error) => {
          toast.error("Message Not Sent 🥲");
        }
      );
  };

  return (
    <div className="flex items-center justify-center w-full animate-fadeIn delay-300 duration-300">
      <div className=" mx-auto place-content-center ">
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={sendEmail}
          className=" delay-1000 duration-500"
        >
          {({ isSubmitting }) => (
            <Form ref={formRef}>
              <div className="">
                <p className="w-full text-3xl font-bold text-white text-center">
                  Contact
                </p>
              </div>

              <div className="flex flex-col xl:w-[800px] lg:w-[700px] md:w-96  xl:mb-4 lg:mb-4 md:mb-3 sm:mb-0 mb-1">
                <label htmlFor="name" className="text-white">
                  Name
                </label>
                <Field
                  className="rounded-md py-2 px-3 text-black "
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  autoComplete="name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500"
                />

                <label htmlFor="email" className="text-white ">
                  Email
                </label>
                <Field
                  className="rounded-md py-2 px-3 text-black "
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  autoComplete="email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />

                <label htmlFor="message" className="text-white">
                  Message
                </label>
                <Field
                  className=" w-full py-2 rounded-md text-black px-3 "
                  name="message"
                  type="text"
                  component="textarea"
                  rows="5"
                  placeholder="Enter Your Message"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 top-0"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="text-white bg-green-500 hover:bg-green-700 hover:duration-300 font-w-full bold rounded-md px-2 py-2 animate-fadeIn"
              >
                Send Message
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Contact;
