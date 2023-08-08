import Link from "next/link";
import classes from "./Button.module.css";

function Button(props: { link: string; children: any }) {
  const { link, children } = props;

  return (
    <Link href={link} className={classes.btn}>
      <span>{children}</span>
    </Link>
  );
}

export default Button;
