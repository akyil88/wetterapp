export default function List({ entries, isForGoodWeather }) {
  return (
    <>
      <h3>
        {isForGoodWeather
          ? `Activities for good weather:`
          : `Activities for bad weather:`}
      </h3>

      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>{entry.activityName}</li>
        ))}
      </ul>
    </>
  );
}
