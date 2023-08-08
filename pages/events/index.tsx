import { getAllEvents } from "@/dummy-data";
import EventList from "@/components/events/EventList";
import EventSearch from "@/components/events/EventSearch";
import { useRouter } from "next/router";

function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  const findEventHandlers = (
    year: string | undefined,
    month: string | undefined
  ) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  
  return (
    <div>
      <EventSearch onSearch={findEventHandlers} />
      <EventList items={events} />
    </div>
  );
}

export default AllEventsPage;
