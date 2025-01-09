import "./CustomButton.css";

export default function CustomButton({
  text,
  backgroundColor,
  color,
  onClickHandler,
}) {
  return (
    <div className="buttons">
      <button
        style={{ backgroundColor: backgroundColor, color: color }}
        onClick={onClickHandler}
      >
        {text}
      </button>
    </div>
  );
}
