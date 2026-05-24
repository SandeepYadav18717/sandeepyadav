function Button({id, text, onClick }) {
  return (
    <button id=onClick={onClick} className="btn">
      {text}
    </button>
  );
}
export default Button;