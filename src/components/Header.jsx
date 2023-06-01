const Header = () => {
  const today = new Date();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let day = weekday[today.getDay()];
  let currentMonth = month[today.getMonth()];
  let currentDate = today.getDate();
  let greetingOfTheDay = today.getHours();
  let greeting = "";
  if (greetingOfTheDay < 12) {
    greeting = "Good morning";
  } else if (greetingOfTheDay < 17) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }
  return (
    <>
      <div className="heading">
        <i className="fa-regular fa-square-check logo-icon"></i>
        <h1>{greeting}</h1>
      </div>
      <h2>
        it's {day}, {currentMonth} {currentDate}'
      </h2>
    </>
  );
};

export default Header;
