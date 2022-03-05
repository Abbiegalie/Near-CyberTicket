import "regenerator-runtime/runtime";
import React from "react";
import "../global.css";
import Calendar from "../assets/calendar.png";
import People from "../assets/people.png";
import Book from "../assets/book.png";
import Fandom from "../assets/fandom.png";

const aboutData = [
  {
    title: "Enhance Your Fandom",
    description:
      "Choose your prices, set your ticket amount. You have complete control over how you want to sell your tickets and we help you sell them directly to your fans.",
    image: Fandom,
  },

  {
    title: "Discover Events",
    description:
      "Find events you love, from the artist you love. Tickets can easily be bought and sold through our secondary marketplace.",
    image: Calendar,
  },
  {
    title: "Create your collection",
    description:
      "Start your collection and gain access to unique, in concert airdrop memorabilia.",
    image: Book,
  },
  {
    title: "Know Your Audience",
    description:
      "CyberTickets have traceability, allowing users to gain knowledge and gather post sales customer data. Protect consumers from counterfeits and scalpers.",
    image: People,
  },
];

export default function Home() {
  return (
    <div
      style={{
        overflowY: "scroll",
        backgroundColor: "white",
        paddingBottom: 100,
      }}
    >
      <HomeTopBar />
      <UpcomingLaunches />
      <NotableDrops />
      <AboutData />
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
            onClick={() => {
              window.location.href = "/marketplace";
            }}
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
            onClick={() => {
              window.location.href = "/artists";
            }}
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

function UpcomingLaunches() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="sectionHeader">Upcoming Launches</h1>
      <div className="flexRow largeSidePadding">
        <button
          onClick={() => {
            window.location.href = "/launchpad";
          }}
          style={{
            height: 350,
            width: "30%",
            backgroundColor: "gray",
            borderRadius: 10,
          }}
        />
        <button
          onClick={() => {
            window.location.href = "/launchpad";
          }}
          style={{
            height: 350,
            width: "30%",
            backgroundColor: "gray",
            borderRadius: 10,
          }}
        />
        <button
          onClick={() => {
            window.location.href = "/launchpad";
          }}
          style={{
            height: 350,
            width: "30%",
            backgroundColor: "gray",
            borderRadius: 10,
          }}
        />
      </div>
    </div>
  );
}

function NotableDrops() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="sectionHeader">Notable Drops</h1>
      <div className="flexRow largeSidePadding">
        <button
          onClick={() => {
            window.location.href = "/marketplace";
          }}
          style={{
            height: 550,
            width: "30%",
            backgroundColor: "gray",
            borderRadius: 10,
          }}
        />
        <button
          onClick={() => {
            window.location.href = "/marketplace";
          }}
          style={{
            height: 550,
            width: "30%",
            backgroundColor: "gray",
            borderRadius: 10,
          }}
        />
        <button
          onClick={() => {
            window.location.href = "/marketplace";
          }}
          style={{
            height: 550,
            width: "30%",
            backgroundColor: "gray",
            borderRadius: 10,
          }}
        />
      </div>
    </div>
  );
}

function AboutData() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="sectionHeader">Why CyberTicket?</h1>
      <div className="flexRow sidePadding">
        {aboutData.map((data) => (
          <div
            style={{
              width: "25%",
              alignItems: "center",
              textAlign: "center",
              padding: 10,
              paddingTop: 30,
            }}
          >
            <img
              src={data.image}
              style={{ height: 40, width: 40, marginBottom: 10 }}
            />
            <br />
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
