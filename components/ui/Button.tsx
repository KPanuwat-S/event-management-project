import Link from "next/link";
import classes from "./Button.module.css";

interface Prop {
  link?: string;
  children: JSX.Element;
  onClick?: () => void;
}

function Button({ link, children, onClick }: Prop) {
  if (link) {
    return (
      <Link href={link} className={classes.btn}>
        <span>{children}</span>
      </Link>
    );
  }
  return (
    <button className={classes.btn} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
