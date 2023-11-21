// import React from "react";

// const cardStyle = {
//   border: "1px solid #ccc",
//   borderRadius: "5px",
//   padding: "15px",
//   margin: "10px",
//   boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//   backgroundColor: "white",
//   width: "300px",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center", // Center the content horizontally
// };

// const cardContainerStyle = {
//   display: "flex",
//   flexWrap: "wrap",
//   gap: "10px",
//   maxHeight: "400px",
//   overflowY: "auto",
// };

// const imageStyle = {
//   width: "100%", // Make sure the image spans the width of the card
//   maxHeight: "150px", // Set the maximum height for the image
//   objectFit: "cover", // Maintain the aspect ratio of the image
//   marginBottom: "10px", // Add some spacing between the image and text
// };

// const Appcards = (props) => {
//   const { title, description, category, playableDevices, imageUrl } = props;

//   return (
//     <div style={cardContainerStyle}>
//       <div style={cardStyle} className="app-card">
//         <img src={imageUrl} alt={title} style={imageStyle} />
//         <h2>{title}</h2>
//         <p>{description}</p>
//         <p>
//           <strong>Category:</strong> {category}
//         </p>
//         <p>
//           <strong>Playable Devices:</strong> {playableDevices.join(", ")}
//         </p>
//       </div>
//       {/* Add more AppCard components here for additional cards */}
//     </div>
//   );
// };

// export default Appcards;
