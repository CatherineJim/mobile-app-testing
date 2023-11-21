import React from "react";

function Achievements({ achievements }) {
  return (
    <div className="achievements-list">
      <h2>Achievements</h2>
      <ul>
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
}

export default Achievements;
