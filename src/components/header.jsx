const Header = ({ data, toggle }) => {
  return (
    <>
      <header className="flex flex-col">
        <h1 className="text-center">{data.h1}</h1>
        <div className="flex gap-4">
          <span>{data.annual}</span>
          <label className="inline-flex cursor-pointer items-center">
            <div className="relative">
              <input
                type="checkbox"
                className="peer sr-only"
                onClick={toggle}
              />
              <div className="from-colors-gradientStart to-colors-gradientEnd peer h-6 w-11 rounded-full bg-gradient-to-b after:absolute after:right-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-gray-200 peer-checked:after:translate-x-[-100%]"></div>
            </div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
          </label>
          <span>{data.monthly}</span>
        </div>
      </header>
    </>
  );
};

export default Header;
