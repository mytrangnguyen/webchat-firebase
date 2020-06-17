import React from "react";

function History(props) {
  return (
    <div className="history-activity">
      <div className="time-act">{props.time}</div>
      <div className="content-act">{props.content}</div>
    </div>
  );
}

export default History;
