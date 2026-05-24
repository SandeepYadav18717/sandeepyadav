function Button({id text, onClick }) {
  return (
    <button onClick={onClick} className="btn">
      {text}
    </button>
  );
}
export default Button;