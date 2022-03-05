import "regenerator-runtime/runtime";
import React from "react";
import "../global.css";

const instructionsData = [
  {
    title: "Enhance Your Fandom",
    description:
      "Choose your prices, set your ticket amount. You have complete control over how you want to sell your tickets and we help you sell them directly to your fans.",
    image: "",
  },

  {
    title: "Discover Events",
    description:
      "Find events you love, from the artist you love. Tickets can easily be traded among wallets.",
    image: "",
  },
  {
    title: "Create your collection",
    description:
      "Start your collection and gain access to unique, in concert airdrop memorabilia.",
    image: "",
  },
  {
    title: "Know Your Audience",
    description:
      "CyberTickets have traceability, allowing users to gain knowledge and gather post sales customer data. Discover counterfeits and protect consumers from fraudulent products and scalpers.",
    image: "",
  },
];

export default function Home() {
  return (
    <div
      style={{
        height: "1000px",
        overflowY: "scroll",
        backgroundColor: "white",
      }}
    >
      <HomeTopBar />
      <div className="flexRow sidePadding">
        {instructionsData.map((data) => (
          <div
            style={{
              width: "25%",
              alignItems: "center",
              textAlign: "center",
              padding: 10,
              paddingTop: 30,
            }}
          >
            <text style={{ fontWeight: "bold", fontSize: 16 }}>
              {data.title}
            </text>
            <br />
            <text>{data.description}</text>
          </div>
        ))}
      </div>
    </div>
  );
}

function HomeTopBar({}) {
  return (
    <div className="coverImageStyle">
      <div>
        <h1 className="homeTitle">Introducing non-fungible ticketing</h1>
        <h1 className="homeSubtitle">
          Our secure NFT ticketing marketplace enables proof of authenticity,
          ownership, possession, and digital product experiences with just a few
          clicks.
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <button
            type="button"
            class="btn btn-primary btn-sm"
            style={{
              height: 36,
              fontSize: 12,
              borderRadius: 6,
              paddingLeft: 25,
              paddingRight: 25,
            }}
          >
            Explore
          </button>
          <button
            type="button"
            class="btn btn-light btn-sm"
            style={{
              height: 36,
              fontSize: 12,
              borderRadius: 6,
              paddingLeft: 25,
              paddingRight: 25,
            }}
          >
            Create
          </button>
        </div>
      </div>
      <div
        style={{
          height: 400,
          width: 400,
          backgroundColor: "gray",
          borderRadius: 20,
        }}
      ></div>
    </div>
  );
}
