import Message from "./Message";

export default function MessageBox({ billAmount, tipAmount }) {
  return (
    <div className="message-box">
      <Message message="Your Billing amount is" amount={billAmount} />
      <Message message="Your Total Tip amount is" amount={tipAmount} />
      <Message
        message="You will be paying"
        amount={Number(billAmount) + Number(tipAmount)}
      />
    </div>
  );
}
