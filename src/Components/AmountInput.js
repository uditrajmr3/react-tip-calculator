export default function AmountInput({ input, onInput }) {
  return (
    <div className="amount">
      <p>
        How much was the bill
        <span>
          <strong>
            <em> Rs. </em>
          </strong>
        </span>
      </p>
      <input
        type="type"
        className="input"
        placeholder="Enter amount here"
        value={input}
        onInput={(e) => onInput(e.target.value)}
      />
    </div>
  );
}
