import Link from "next/link";
import classes from "./EventItem.module.css";
import Button from "../ui/Button";
import ArrowRightIcon from "../icons/arrow-right-icon";
type eventItem = {
  id: string;
  title: string;
  image: string;
  date: string;
  location: string;
};

function EventItem({ id, title, image, date, location }: eventItem) {
  const humandReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(",", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={"/" + image} alt="" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{humandReadableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon></ArrowRightIcon>
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
