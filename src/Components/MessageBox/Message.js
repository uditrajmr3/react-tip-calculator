export default function Message({ message, amount }) {
  return (
    <p>
      {message}
      <span>
        <strong>
          <em> Rs. </em>
        </strong>
      </span>
      {amount}
    </p>
  );
}
