export default function Day16() {
  const checkers = [];
  for (let i = 0; i < 8; ++i) {
    checkers.push(<div className={`squre`} />);
  }
  return (
    <div className="App">
      <div className="card">
        <div className="card-pic">
          <img
            src="https://tsh.io/wp-content/uploads/2019/12/react-meme1_.png"
            alt=""
          />
        </div>

        <div className="card-text">
          <h1> React Card </h1>

          <div className="card-description">
            <p>your main THA is to make meme cards</p>
          </div>
        </div>
      </div>
      <div className="chess-board">
        <div className="row">{checkers}</div>
        <div className="row">{checkers}</div>
        <div className="row">{checkers}</div>
        <div className="row">{checkers}</div>
        <div className="row">{checkers}</div>
        <div className="row">{checkers}</div>
        <div className="row">{checkers}</div>
        <div className="row">{checkers}</div>
      </div>
    </div>
  );
}
