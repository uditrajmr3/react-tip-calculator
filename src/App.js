import { useState } from "react";

import AmountInput from "./Components/AmountInput";
import TipServices from "./Components/TipServices/TipServices";
import MessageBox from "./Components/MessageBox/MessageBox";
import CustomButton from "./Components/CustomButton/CustomButton";

const tipMessages = [
  {
    id: 0,
    message: "How did you like the service?",
  },
  {
    id: 1,
    message: "How did your friend like the service?",
  },
];

function App() {
  const [billAmount, setBillAmount] = useState("");
  const [tips, setTips] = useState(tipMessages.map((_) => 0));

  function handleBillInput(newAmount) {
    setBillAmount(newAmount);
  }

  function resetAmount() {
    setBillAmount("");
  }

  function logTipChangeAndUpdate(key, value) {
    console.log(key, value);
    setTips((arr) => {
      const newArr = [...arr];
      newArr[key] = value;
      return newArr;
    });
  }

  function calculateTip() {
    const tip = tips.reduce((sum, item) => sum + (item * billAmount) / 100, 0);
    return tip / tips.length;
  }

  return (
    <div className="App">
      <h1>Tipping Service</h1>
      <AmountInput input={billAmount} onInput={handleBillInput} />
      <TipServices
        tipMessages={tipMessages}
        tipValues={tips}
        onTipChangeHandler={logTipChangeAndUpdate}
      />
      {billAmount.length !== 0 && (
        <MessageBox billAmount={billAmount} tipAmount={calculateTip()} />
      )}
      {billAmount.length !== 0 && <Actions resetHandler={resetAmount} />}
    </div>
  );
}

function Actions({ resetHandler, paymentHandler }) {
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

export default App;
