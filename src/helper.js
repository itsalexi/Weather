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

export { getDayOfWeek };
