function Button({id, text, onClick }) {
  return (
    <button idonClick={onClick} className="btn">
      {text}
    </button>
  );
}
export default Button;