import style from "./Description.module.css";

const Description = () => {
  return (
    <div>
      <h1 className={style.name}>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Description;
