export const TypeSelectButton = ({
  loginType,
  type,
  handleSelectType,
  children,
  Icon,
}) => {
  return (
    <button
      className={`md:p-8 max-w-[90%] transition-all duration-100 overflow-hidden  p-6 md:h-44 rounded-md md:w-3/6 active:scale-95 relative border-2 border-transparent  flex flex-col justify-center items-center   bg-zinc-100 dark:bg-zinc-950 ${
        loginType === type
          ? "scale-105 shadow-lg shadow-primary-400/30 !bg-primary-200"
          : "backdrop-filter"
      }`}
      onClick={() => handleSelectType(type)}
    >
      <Icon
        className={`absolute top-8 right-0  scale-150 w-28 h-28 text-gray-300 duration-150 blur-sm ${
          loginType == type && "text-primary-100"
        }`}
      />
      <div className="md:text-[28px] text-lg  text-gray-700 z-0 font-bold uppercase">
        {children}
      </div>
    </button>
  );
};
