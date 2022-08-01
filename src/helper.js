function getDayOfWeek(timestamp) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const day = new Date(timestamp * 1000).getDay();
  return days[day];
}

function getDate(timestamp) {
  return new Date(timestamp * 1000).toDateString();
}

function getTime(timestamp) {
  return new Date(timestamp * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}
export { getDayOfWeek, getDate, getTime };
