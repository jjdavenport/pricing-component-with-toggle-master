const Header = ({ data, toggle }) => {
  return (
    <>
      <h1>{data.h1}</h1>
      <span>{data.annual}</span>
      <input type="checkbox" onClick={toggle} />
      <span>{data.monthly}</span>
    </>
  );
};

export default Header;
