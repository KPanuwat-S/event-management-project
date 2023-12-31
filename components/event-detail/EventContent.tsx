import classes from "./EventContent.module.css";

function EventContent(props: { children: JSX.Element }) {
  return <section className={classes.content}>{props.children}</section>;
}

export default EventContent;
