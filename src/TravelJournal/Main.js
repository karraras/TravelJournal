import React from "react";

export default function Main(props) {
  return (
    <div className="page">
      <div className="d-flex flex-direction-row  my-box">
        <img
          className="rounded"
          src={props.imageUrl}
          alt=""
          style={{ width: "200px", height: "auto" }}
        />
        <div className="p-4">
          <div>
            <i className="fa-sharp fa-solid fa-location-dot"></i>
            <span>{props.location}</span>
            <a href={props.googleMapsUrl} target="_blank">
              View on Google Maps
            </a>
          </div>
          <h1>{props.title}</h1>
          <div className="d-flex">
            <p>{props.startDate}</p>
            <p>{props.endDate}</p>
          </div>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
