import FormField from "../FormField/FormField";
import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  return (
    <form className={styles["form-wrapper"]}>
      <FormField
        label="Name"
        placeholder="Let's meet each other"
        inputType="text"
        isTextArea={false}
      />
      <FormField
        label="Email"
        placeholder="Let me reply to you!"
        inputType="email"
        isTextArea={false}
      />
      <FormField
        label="Message"
        placeholder="Write something interesting :)"
        isTextArea={true}
      />
      <button type="submit" className={styles["submit-button"]}>
        Send
      </button>
    </form>
  );
};

export default ContactForm;
