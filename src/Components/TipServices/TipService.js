import { tippingOptions } from "../../lib/data/tipping_options";

export default function TipService({
  keyValue,
  tipValue,
  onTipChangeHandler,
  children,
}) {
  return (
    <div className="tip">
      <p>{children}</p>
      <select
        value={tipValue}
        onChange={(e) => onTipChangeHandler(keyValue, e.target.value)}
      >
        {tippingOptions.map((option) => (
          <option key={option.id} value={option.tip}>
            {option.message} ({option.tip}%)
          </option>
        ))}
      </select>
    </div>
  );
}
