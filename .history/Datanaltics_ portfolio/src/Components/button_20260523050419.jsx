function Button({ClassName, text, onClick }) {
  return (
    <button id={ClassName}onClick={onClick} className="btn">
      {text}
    </button>
  );
}
export default Button;