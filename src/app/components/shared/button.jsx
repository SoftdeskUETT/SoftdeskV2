export const EventButton = ({ children, styles }, props) => {
  return (
    <button
      className={` bg-[#FF7420] w-[120px] rounded-full text-white py-3 ${styles}`}
      {...props}
    >
      {children}
    </button>
  );
};
