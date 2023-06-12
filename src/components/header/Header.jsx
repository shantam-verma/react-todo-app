import HeadingCSS from "./Header.module.css";
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
      <div className="px-4 py-5 text-center">
        <div className="d-flex justify-content-center align-items-center pe-5">
          <i
            className={`fa-regular fa-square-check pe-4 ${HeadingCSS.icon}`}
          ></i>
          <h1 className="pe-5 me-5">{greeting}</h1>
        </div>
        <h2 className="pe-5 me-2">
          it's {day}, {currentMonth} {currentDate}'
        </h2>
      </div>
    </>
  );
};

export default Header;
