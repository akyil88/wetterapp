export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();

    onAddActivity(
      event.target.activityName.value,
      event.target.isForGoodWeather.checked
    );
  }
  return (
    <>
      <h2>Add new Activity:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">Name of Activity:</label>
        <input id="text" name="activityName" />
        <div>
          <input type="checkbox" name="isForGoodWeather" id="weather" />
          <label htmlFor="weather">Good-weather activity</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
