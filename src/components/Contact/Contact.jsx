import { useRef } from "react";
import emailjs from "@emailjs/browser"; // Updated import for emailjs
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
    const serviceID = "service_kd9bxjp";
    const templateID = "template_nyejv2n";
    const publicID = "Ijq68cTwfeSjj0_bx";

    emailjs.sendForm(serviceID, templateID, formRef.current, publicID).then(
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
    <div className="h-auto w-full flex bg-contact bg-cover bg-no-repeat animate-fadeIn">
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={sendEmail}
        className=" flex justify-center 
       items-center w-full animate-fadeIn "
      >
        {({ isSubmitting }) => (
          <Form
            ref={formRef}
            className="flex flex-col my-auto w-full items-center animate__animated animate__zoomIn"
          >
            <div
              className="max-w-3xl w-full justify-center flex flex-col h-full 
              xl:gap-5 lg:gap-4 md:gap-4 sm:gap-0 gap-3 tracking-wider"
            >
              <label htmlFor="name" className="text-white flex flex-col">
                Name*
                <Field
                  className="rounded-md py-3  text-black bg-slate-200 
                    hover:ring-2 hover:ring-blue-400 px-3"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Name"
                  autoComplete="true"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 "
                />
              </label>

              <label htmlFor="email" className="text-white flex flex-col">
                Email*
                <Field
                  className="rounded-md py-3 px-3 text-black bg-slate-200  "
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                  autoComplete="true"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />{" "}
              </label>

              <label htmlFor="message" className="text-white flex flex-col">
                Message*
                <Field
                  className=" w-full py-2 px-3 rounded-md text-black
                   bg-slate-200"
                  name="message"
                  type="text"
                  component="textarea"
                  id="message"
                  autoComplete="true"
                  placeholder="Enter Message"
                  rows="6"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 "
                />
              </label>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="text-black bg-slate-200 hover:bg-orange-400 hover:font-bold tracking-wider 
                hover:duration-300 font- bold rounded-md px-5 py-2 
                xl:mt-5 lg:mt-5 md:mt-5 sm:mt-0 mt-2
                "
            >
              Send Message
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Contact;
