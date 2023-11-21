import styles from "./FormField.module.scss";

interface FormFieldProps {
  label: string;
  placeholder: string;
  isTextArea: boolean;
  inputType?: string;
}

const FormField = ({
  label,
  placeholder,
  isTextArea,
  inputType,
}: FormFieldProps) => {
  return (
    <div className={styles["input-field"]}>
      <label htmlFor={label}>{label}</label>
      {!isTextArea ? (
        <input id={label} placeholder={placeholder} type={inputType} />
      ) : (
        <textarea id={label} placeholder={placeholder} rows={7} />
      )}
    </div>
  );
};

export default FormField;
