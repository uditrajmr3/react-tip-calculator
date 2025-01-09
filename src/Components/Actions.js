import CustomButton from "./CustomButton/CustomButton";

export default function Actions({ resetHandler, paymentHandler }) {
  return (
    <div className="actions">
      <CustomButton
        text="Reset"
        backgroundColor="#ffaaba"
        color="#fff"
        onClickHandler={resetHandler}
      />
      <CustomButton
        text="Pay Amount"
        backgroundColor="#16a34a"
        color="#fff"
        onClickHandler={paymentHandler}
      />
    </div>
  );
}
