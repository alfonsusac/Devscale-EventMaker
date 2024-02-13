import { EventItemAuthor } from "./EventItemAuthor";
import Link from "next/link";

export const EventItem = async ({ events }) => {
  console.log(events.image);
  return (
    <div className="card card-compact bg-base-100 shadow-lg">
      <div className="h-32 bg-cover bg-center rounded-t-xl"></div>
      <div className="flex flex-col justify-center space-y-3 p-3">
        <div className="space-y-2">
          <h2 className="text-md font-semibold">{events.title}</h2>
          <p className="text-sm text-gray-400">{events.description}</p>
        </div>
        <div className="space-y-5">
          <div>
            <p className="text-sm text-gray-600">
              Organized by : <EventItemAuthor userid={events.author} />
            </p>
            <p className="text-sm text-gray-600">
              Show Time : {events.dateTime}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <Link href={`/${events.id}`}>
              <button className="btn btn-success btn-sm w-full">
                Detail Event
              </button>
            </Link>
            <Link href={`/dashboard/edit/${events.id}`}>
              <button className="btn btn-primary btn-sm w-full">
                Edit Event
              </button>
            </Link>
            <Link href={`/dashboard/delete/${events.id}`}>
              <button className="btn btn-error btn-sm w-full">
                Delete Event
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
