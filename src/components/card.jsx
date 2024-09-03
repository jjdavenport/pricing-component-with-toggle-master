const Card = ({
  name,
  monthly,
  storage,
  users,
  send,
  learn,
  toggle,
  annual,
  gradient,
}) => {
  return (
    <>
      <article
        className={`${gradient === true ? "from-colors-gradientStart to-colors-gradientEnd bg-gradient-to-b" : "bg-white"} flex flex-col gap-2 text-center shadow-2xl`}
      >
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
