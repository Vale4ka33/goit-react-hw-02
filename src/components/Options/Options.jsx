import style from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div className={style.container}>
      <button className={style.btn} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={style.btn} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={style.btn} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={style.btn} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
