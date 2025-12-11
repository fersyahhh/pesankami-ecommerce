const Button = ({ children, btnStyle, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${btnStyle} rounded-lg bg-blue-500 px-6 py-1.5 font-bold text-white shadow-lg`}
    >
      {children}
    </button>
  );
};

export default Button;
