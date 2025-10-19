import "./style.css";

type ButtonProps = {
  children: React.ReactNode;
};

export function Button({ children }: ButtonProps) {
  return <button className="act-button">{children}</button>;
}
