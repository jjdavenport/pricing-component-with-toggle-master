const Header = ({ data }) => {
  return (
    <>
      <h1>{data.h1}</h1>
      <span>{data.annual}</span>
      <input type="checkbox" />
      <span>{data.monthly}</span>
    </>
  );
};

export default Header;
