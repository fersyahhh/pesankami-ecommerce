const ButtonLogin = ({ textBtn, iconBtn, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`mx-auto flex w-full items-center justify-center gap-4 rounded-lg border-2 border-gray-500/20 py-3.5 font-semibold`}
      >
        <div className="h-6 w-6">
          <img className="w-full" src={iconBtn} alt="login-img" />
        </div>
        <p className="text-sm">{textBtn}</p>
      </button>
    </div>
  );
};

export default ButtonLogin;
