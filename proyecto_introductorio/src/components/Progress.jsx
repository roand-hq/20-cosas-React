const Progress = () => {
  return (
    <div
      class="progress"
      role="progressbar"
      aria-label="Basic example"
      aria-valuenow="50"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div class="progress-bar" style= {{width: "70%"}} />
    </div>
  );
};
export default Progress;