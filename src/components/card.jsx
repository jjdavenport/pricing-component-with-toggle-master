const Card = ({
  name,
  monthly,
  storage,
  users,
  send,
  learn,
  toggle,
  annual,
}) => {
  return (
    <>
      <article className="flex flex-col">
        <span>{name}</span>
        <span>{toggle ? annual : monthly}</span>
        <span>{storage}</span>
        <span>{users}</span>
        <span>{send}</span>
        <span>{learn}</span>
      </article>
    </>
  );
};

export default Card;
