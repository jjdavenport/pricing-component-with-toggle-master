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
  borderL,
  borderR,
}) => {
  return (
    <>
      <article
        className={`${gradient === true ? "bg-gradient-to-b from-colors-gradientStart to-colors-gradientEnd text-white md:py-8 lg:py-12" : "bg-white text-colors-grayishBlue md:h-fit"} ${borderR === false ? "rounded-lg md:rounded-r-none" : "rounded-lg md:rounded-r-xl"} ${borderL === false ? "rounded-lg md:rounded-l-none" : "rounded-lg md:rounded-l-xl"} flex flex-col justify-center gap-6 p-6 text-center shadow-2xl md:p-4 lg:p-6`}
      >
        <span>{name}</span>
        <p className="flex items-center justify-center gap-1 md:min-w-56 lg:min-w-60">
          <span
            className={`${gradient === true ? "text-white" : "text-colors-darkGrayishBlue"} text-3xl`}
          >
            {dollar}
          </span>
          <span
            className={`${gradient === true ? "text-white" : "text-colors-darkGrayishBlue"} text-5xl lg:text-6xl`}
          >
            {toggle ? annual : monthly}
          </span>
        </p>
        <ul className="divide-lightGrayishBlue/40 border-lightGrayishBlue/40 divide-y border-b border-t">
          <li className="p-4">{storage}</li>
          <li className="p-4">{users}</li>
          <li className="p-4">{send}</li>
        </ul>

        <button
          className={`${gradient === true ? "bg-white text-colors-gradientEnd hover:bg-opacity-0 hover:text-white hover:outline hover:outline-1 hover:outline-white" : "bg-gradient-to-r from-colors-gradientStart to-colors-gradientEnd text-white hover:bg-none hover:text-colors-gradientEnd hover:outline hover:outline-1 hover:outline-colors-gradientEnd"} rounded-md p-2 transition duration-300 ease-in-out`}
        >
          {learn}
        </button>
      </article>
    </>
  );
};

export default Card;
