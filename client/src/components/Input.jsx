import style from "./input.module.css";

function Input({ placeHolder, type, onChange }) {
  return (
    <input
      className={style.input}
      type={type}
      placeholder={placeHolder}
      onChange={onChange}
    />
  );
}

export default Input;
