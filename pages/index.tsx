import { getFeaturedEvents } from "@/dummy-data";
import EventList from "@/components/events/EventList";

function HomePage() {
  const featureEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featureEvents}></EventList>
    </div>
  );
}

export default HomePage;
