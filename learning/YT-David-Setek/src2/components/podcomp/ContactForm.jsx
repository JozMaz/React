import { useRef } from "react";

const ContactForm = () => {
  const refInput = useRef(null);
  const refLink = useRef(null);

  function formSubmit(event) {
    event.preventDefault();
    console.log(refInput.current);
    refInput.current.style.fontSize = "120px";
    refLink.current.href = "https://bright-buttercream-cad0e6.netlify.app/";
    refLink.current.textContent = "Seznam";
  }

  return (
    <article>
      <h2 ref={refInput}>FORM</h2>
      <form onSubmit={formSubmit}>
        <input type="text" />
        <input type="submit" value="Submit" />
      </form>
      <a href="https://www.google.com" ref={refLink}>
        Google
      </a>
    </article>
  );
};

export default ContactForm;
