import TipService from "./TipService";

export default function TipServices({
  tipMessages,
  tipValues,
  onTipChangeHandler,
}) {
  return (
    <div className="tips">
      {tipMessages.map((message) => (
        <TipService
          key={message.id}
          keyValue={message.id}
          tipValue={tipValues[message.id]}
          onTipChangeHandler={onTipChangeHandler}
        >
          {message.message}
        </TipService>
      ))}
    </div>
  );
}
