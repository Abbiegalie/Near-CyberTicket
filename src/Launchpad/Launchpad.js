import "regenerator-runtime/runtime";
import React from "react";
import { useParams } from "react-router";

export default function Launchpad(props) {
  const event = props?.match?.params?.event;

  return (
    <div>
      <text>Launchpad {event}</text>
    </div>
  );
}
