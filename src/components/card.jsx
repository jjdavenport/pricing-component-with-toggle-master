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
  dollar,
}) => {
  return (
    <>
      <article
        className={`${gradient === true ? "from-colors-gradientStart to-colors-gradientEnd bg-gradient-to-b text-white md:h-full" : "text-colors-grayishBlue bg-white"} md:h-10/12 flex flex-col gap-6 rounded-lg p-6 text-center shadow-2xl`}
      >
        <span>{name}</span>
        <p className="flex items-center justify-center">
          <span
            className={`${gradient === true ? "text-white" : "text-colors-darkGrayishBlue"} text-3xl`}
          >
            {dollar}
          </span>
          <span
            className={`${gradient === true ? "text-white" : "text-colors-darkGrayishBlue"} text-6xl`}
          >
            {toggle ? annual : monthly}
          </span>
        </p>
        <ul className="divide-lightGrayishBlue/40 border-lightGrayishBlue/40 divide-y border-b border-t">
          <li className="p-3">{storage}</li>
          <li className="p-3">{users}</li>
          <li className="p-3">{send}</li>
        </ul>

        <button
          className={`${gradient === true ? "text-colors-gradientEnd bg-white" : "from-colors-gradientStart to-colors-gradientEnd bg-gradient-to-r text-white"} rounded-md p-2`}
        >
          {learn}
        </button>
      </article>
    </>
  );
};

export default Card;
