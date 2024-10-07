import style from "./Main.module.css";

function Header() {
  return (
    <div className={style.header}>
      <h1 className={style.collegeName}>
        Government College Of Engineering, Srirangam
      </h1>
      <h4 className={style.title}>Student Verification System</h4>
    </div>
  );
}

export default Header;
