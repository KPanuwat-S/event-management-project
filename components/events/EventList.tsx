import EventItem from "./EventItem";
import classes from "./EventList.module.css";

type eventItem = {
  id: string;
  title: string;
  image: string;
  date: string;
  location: string;
};

function EventList(props: { items: eventItem[] }) {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map((event: eventItem) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          image={event.image}
          date={event.date}
          location={event.location}
        />
      ))}
    </ul>
  );
}

export default EventList;
