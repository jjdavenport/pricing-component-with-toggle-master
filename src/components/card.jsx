const Card = ({ name, monthly, storage, users, send, learn }) => {
  return (
    <>
      <article>
        <span>{name}</span>
        <span>{monthly}</span>
        <span>{storage}</span>
        <span>{users}</span>
        <span>{send}</span>
        <span>{learn}</span>
      </article>
    </>
  );
};

export default Card;
