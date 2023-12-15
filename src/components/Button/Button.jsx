export const Button = ({ children, onclick, index, className }) => {
  return (
    <button onClick={() => onclick(index)} className={className}>
      {children}
    </button>
  );
};
