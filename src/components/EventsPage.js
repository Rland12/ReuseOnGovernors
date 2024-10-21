import "./styles/EventsPageStyles.css";
import NavigationBar from './NavigationBar';

const Events = () => {
  // Event data
  const events = [
    {
      id: 1,
      title: "FAD Market",
      description:
        "Come for the one-of-a-kind goods, stay for a cock­tail and a game of pétanque ",
      date: "October 19 & 20",
      time: "10:00 AM",
    },
    {
      id: 2,
      title: "Island Cleanup",
      description: "Join us for a fun and eco-friendly cleanup!",
      date: "October 22, 2024",
      time: "10:00 AM",
    },
    {
      id: 3,
      title: "Tree Planting",
      description: "Help plant trees and contribute to a greener island.",
      date: "November 2, 2024",
      time: "9:00 AM",
    },
    {
      id: 4,
      title: "Eco Market",
      description: "Explore eco-friendly vendors and products.",
      date: "November 15, 2024",
      time: "11:00 AM",
    },
  ];

  return (
    <div className='main-content'>
    <div className="events-container">
      <header className="events-header">
        <h2>Events</h2>
      </header>

      {/* Event cards */}
      {events.map((event) => (
        <div key={event.id} className="event-card">
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <span className="event-date">Date: {event.date}</span>
          <span className="event-time">Time: {event.time}</span>
        </div>
      ))}
        <NavigationBar />
    </div>
    </div>
  );
};

export default Events;
