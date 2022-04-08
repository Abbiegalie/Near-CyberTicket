import "regenerator-runtime/runtime";
import React from "react";
import "../global.css";
import Calendar from "../assets/calendar.png";
import People from "../assets/people.png";
import Book from "../assets/book.png";
import Fandom from "../assets/Fandom.png";
import SXSW from "../assets/sxsw.jpeg";
import TateMcRae from "../assets/tate-mcrae.jpeg";
import EmoNightTour from "../assets/emo-night-tour.jpeg";
import Logo from "../assets/logo.png";

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

export const upcomingLaunches = {
  "sxsw-mendes-yatra": {
    event: "The Stage at SXSW: Shawn Mendes and Sebastian Yatra",
    date: "03/19/2022",
    image: SXSW,
    eventPath: "sxsw-mendes-yatra",
    location: "The Long Center for the Performing Arts",
  },
  "tate-mcrae": {
    event: "Tate McRae",
    date: "03/21/2022",
    image: TateMcRae,
    eventPath: "tate-mcrae",
    location: "The Long Center for the Performing Arts",
  },
  "emo-night-tour": {
    event: "Emo Night Tour",
    date: "04/01/2022",
    image: EmoNightTour,
    eventPath: "emo-night-tour",
    location: "The Long Center for the Performing Arts",
  },
};

export const notableDrops = [
  {
    event: "Nick Cave + Warren Ellis - North American Tour 2022",
    date: "03/05/2022",
    image: "",
  },
  {
    event: "The English Beat",
    date: "03/10/2022",
    image: "",
  },
  {
    event: "The SteelDrivers",
    date: "03/12/2022",
    image: "",
  },
];

export default function Home() {
  return (
    <div className="coverImageStyle">
      <HomeTopBar />
      {/* <UpcomingLaunches />
      <NotableDrops /> */}
      <AboutData />
    </div>
  );
}

function HomeTopBar({}) {
  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* <img src={Logo} style={{ height: 85, width: 85, marginLeft: -30 }} /> */}
          <h1 className="homeTitle">paperclipe</h1>
          <button
            class="btn btn-light btn-sm"
            onClick={() => {
              window.location.href = "/launchpad/" + item.eventPath;
            }}
            style={{
              height: 30,
              width: 110,
              borderRadius: 7,
              padding: 5,
            }}
          >
            <text style={{ fontSize: 12, fontWeight: "bold" }}>Contact Us</text>
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingBottom: 20,
          }}
        >
          <div style={{ paddingLeft: 50 }}>
            <h1 className="homeLargeTitle">
              Find and connect with your favorite artists & events in Web 3.0
            </h1>
            <h1 className="homeDescription">
              We build products to link fans and artists while using
              decentralized technology to protect fans and increase
              profitability.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

function UpcomingLaunches() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="sectionHeader">Upcoming Launches</h1>
      <div className="flexRow largeSidePadding">
        {Object.values(upcomingLaunches).map((item) => {
          return (
            <button
              class="btn btn-light btn-sm"
              onClick={() => {
                window.location.href = "/launchpad/" + item.eventPath;
              }}
              style={{
                height: 370,
                width: "30%",
                backgroundColor: "white",
                borderRadius: 10,
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                padding: 0,
                overflow: "hidden",
                textAlign: "center",
              }}
            >
              <img src={item.image} style={{ width: "100%", height: 250 }} />
              <br />
              <h1 className="eventCardTitle">{item.event}</h1>
              <br />
              <h1 className="eventCardDate">{item.date}</h1>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function NotableDrops() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="sectionHeader">Notable Drops</h1>
      <div className="flexRow largeSidePadding">
        {Object.values(upcomingLaunches).map((item) => {
          return (
            <button
              class="btn btn-light btn-sm"
              onClick={() => {
                window.location.href = "/marketplace/" + item.eventPath;
              }}
              style={{
                height: 370,
                width: "30%",
                backgroundColor: "white",
                borderRadius: 10,
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                padding: 0,
                overflow: "hidden",
                textAlign: "center",
              }}
            >
              <img src={item.image} style={{ width: "100%", height: 250 }} />
              <br />
              <h1 className="eventCardTitle">{item.event}</h1>
              <br />
              <h1 className="eventCardDate">{item.date}</h1>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function AboutData() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="sectionHeader">Why paperclipe?</h1>
      <div className="flexRow sidePadding">
        {aboutData.map((data) => (
          <div
            style={{
              width: "25%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              backgroundColor: "rgba(255,255,255,0.15)",
              margin: 10,
              height: "50vh",
              borderRadius: 15,
              padding: 15,
              paddingTop: "8vh",
            }}
          >
            <img
              src={data.image}
              style={{ height: 55, width: 55, marginBottom: 10 }}
            />
            <br />
            <text style={{ fontWeight: "bold", fontSize: 16, color: "white" }}>
              {data.title}
            </text>
            <br />
            <text style={{ color: "white" }}>{data.description}</text>
          </div>
        ))}
      </div>
    </div>
  );
}
