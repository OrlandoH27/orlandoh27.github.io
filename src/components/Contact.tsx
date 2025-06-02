import React, { useState } from "react"; // Import useState for managing form state

const Contact = () => {
  // State to manage the form submission status and display messages to the user
  const [status, setStatus] = useState(""); // Can be '', 'sending', 'success', 'error'

  // This is the function that will handle the form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default browser form submission (which would reload the page)

    setStatus("sending"); // Set status to 'sending' while the request is in progress

    const form = e.currentTarget; // Get the HTML form element that triggered the submit
    const data = new FormData(form); // Create a FormData object from the form, which will automatically collect named input values

    try {
      // Send a POST request to your unique Formspree endpoint
      const response = await fetch("https://formspree.io/f/xvgroola", {
        method: "POST", // Formspree expects POST requests
        body: data, // The FormData object contains all your form input values
        headers: {
          Accept: "application/json", // Tell Formspree you expect a JSON response
        },
      });

      // Check if the response was successful
      if (response.ok) {
        setStatus("success"); // Set status to 'success'
        form.reset(); // Clear all form fields after successful submission
      } else {
        // If the response was not OK, try to parse the error message from Formspree
        const result = await response.json(); // Get the JSON response
        console.error("Form submission error:", result); // Log the full error to the console
        setStatus("error"); // Set status to 'error'
      }
    } catch (error) {
      // Catch any network errors or issues with the fetch operation itself
      console.error("Network or fetch error:", error);
      setStatus("error"); // Set status to 'error'
    }
  };

  return (
    <section id="contact" className="py-5 text-center">
      <div className="container">
        <h2 className="display-4 mb-5 text-maroon fw-bold">Contact Me</h2>

        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-9 col-sm-10">
            {/* Attach the handleSubmit function to the form's onSubmit event */}
            <form
              className="p-4 rounded-3 shadow-lg contact-form-container"
              onSubmit={handleSubmit}
            >
              {/* Name Field */}
              <div className="mb-3">
                <label
                  htmlFor="name"
                  className="form-label text-maroon fs-5 text-start d-block"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="form-control contact-input-field"
                  id="name"
                  name="name" // <--- CRITICAL: Formspree needs this 'name' attribute
                  placeholder="Name"
                  required // HTML5 validation: makes the field mandatory
                />
              </div>

              {/* Email Field */}
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="form-label text-maroon fs-5 text-start d-block"
                >
                  Email
                </label>
                <input
                  type="email" // Ensures browser's built-in email validation for basic checks
                  className="form-control contact-input-field"
                  id="email"
                  name="email" // <--- CRITICAL: Formspree needs this 'name' attribute
                  placeholder="Email Address"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="form-label text-maroon fs-5 text-start d-block"
                >
                  Message
                </label>
                <textarea
                  className="form-control contact-input-field"
                  id="message"
                  name="message" // <--- CRITICAL: Formspree needs this 'name' attribute
                  rows={5}
                  placeholder="Message"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="text-maroon btn btn-dark btn-lg object contact-submit-button"
                disabled={status === "sending"} // Disable button while sending to prevent multiple submissions
              >
                {status === "sending" ? "Sending..." : "Send Message"}{" "}
                {/* Change button text based on status */}
              </button>

              {/* Conditional rendering for success/error messages */}
              {status === "success" && (
                <div className="alert alert-success mt-3" role="alert">
                  Thank you! Your message has been sent.
                </div>
              )}
              {status === "error" && (
                <div className="alert alert-danger mt-3" role="alert">
                  Oops! There was an error sending your message. Please try
                  again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
