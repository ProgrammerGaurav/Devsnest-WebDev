function Box(props) {
  if (props.alter) {
    return (
      <div
        style={{ backgroundColor: props.i % 2 === 0 ? "black" : "white" }}
        className="box"
      ></div>
    );
  } else {
    return (
      <div
        style={{ backgroundColor: props.i % 2 === 0 ? "white" : "black" }}
        className="box"
      ></div>
    );
  }
}
function day18() {
  let alter = true;
  return (
    <>
      <div id="day18">
        {[...Array(64)].map((box, i) => {
          if (i % 8 === 0 && i !== 0) {
            alter = !alter;
          }
          return <Box i={i} alter={alter} />;
        })}
      </div>
    </>
  );
}

export default day18;
