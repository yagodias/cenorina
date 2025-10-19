import "./style.css";

type ButtonProps = {
  children: React.ReactNode;
  setShowImageAction: (show: boolean) => void;
};

export function Button({ children, setShowImageAction }: ButtonProps) {
  return (
    <button onClick={() => setShowImageAction(true)} className="act-button">
      {children}
    </button>
  );
}
