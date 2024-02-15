import { requestEventList } from "@/lib/fetchAPI";
import { AllEventItem } from "./AllEventItem";

export const AllEvents = async () => {
  let events;
  try {
    const { data } = await requestEventList();
    events = data.reverse();
  } catch (error) {
    console.error("Error fetching event list:", error);
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {events &&
        events.map(({ events }) => (
          <AllEventItem key={events.id} events={events} />
        ))}
    </div>
  );
};
