import "regenerator-runtime/runtime";
import React from "react";
import { useParams } from "react-router";
import { Card } from "antd";
import { upcomingLaunches } from "./Home/Home";
import AlbumOne from "./assets/AlbumOne.jpeg";
import AlbumTwo from "./assets/AlbumTwo.jpeg";
import AlbumThree from "./assets/AlbumThree.jpeg";
import AlbumFour from "./assets/AlbumFour.jpeg";
import ConcertOne from "./assets/ConcertOne.jpg";
import ConcertTwo from "./assets/ConcertTwo.png";
import ConcertThree from "./assets/ConcertThree.jpg";
import ConcertFour from "./assets/ConcertFour.png";

const data = [
  {
    image: AlbumOne,
    title: "Skin",
    by: "Flume",
    percent: "83%",
    soldOut: "N",
    numTokens: 10000,
    tokenValue: 1.5,
  },
  {
    image: AlbumTwo,
    title: "Nothing Was The Same",
    by: "Drake",
    percent: "96%",
    soldOut: "N",
    numTokens: 20000,
    tokenValue: 1.1,
  },
  {
    image: AlbumThree,
    title: "Love Yourself",
    by: "BTS",
    percent: "65%",
    soldOut: "N",
    numTokens: 15000,
    tokenValue: 1.4,
  },
  {
    image: AlbumFour,
    title: "Meri Kahani",
    by: "Arijit Singh",
    percent: "100%",
    soldOut: "Y",
    numTokens: 18000,
    tokenValue: 1.3,
  },
];

const concertData = [
  {
    image: ConcertOne,
    title: "Kelly Clarkson",
    by: "",
    percent: "83%",
    soldOut: "N",
    numTokens: 10000,
    tokenValue: 1.5,
  },
  {
    image: ConcertThree,
    title: "Justin Bieber",
    by: "",
    percent: "96%",
    soldOut: "N",
    numTokens: 20000,
    tokenValue: 1.1,
  },
  {
    image: ConcertTwo,
    title: "Dua Lipa",
    by: "",
    percent: "65%",
    soldOut: "N",
    numTokens: 15000,
    tokenValue: 1.4,
  },
  {
    image: ConcertFour,
    title: "Paul McCartney",
    by: "",
    percent: "100%",
    soldOut: "Y",
    numTokens: 18000,
    tokenValue: 1.3,
  },
];

export default function Fundraising(props) {
  const eventId = props?.match?.params?.event ?? "emo-night-tour";
  const event = upcomingLaunches[eventId];

  return (
    <div
      style={{
        textAlign: "center",
        paddingTop: 30,
        overflowY: "scroll",
        backgroundColor: "white",
        paddingBottom: 60,
      }}
    >
      <h1 className="homeTitle fullWidth">Featured Albums</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "wrap",
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        {data.map((item) => {
          return <MarketplaceCard event={event} item={item} />;
        })}
      </div>
      <h1 className="homeTitle fullWidth">Featured Concerts</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "wrap",
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        {concertData.map((item) => {
          return <MarketplaceCard event={event} item={item} />;
        })}
      </div>
    </div>
  );
}

const MarketplaceCard = ({ event, item }) => {
  return (
    <a>
      <Card
        style={{
          height: 490,
          width: 330,
          marginBottom: 30,
          marginLeft: 10,
          marginRight: 10,
        }}
        hoverable
        cover={
          <img
            src={item.image}
            style={{
              height: 300,
              width: 330,
            }}
          />
        }
      >
        <div style={{ textAlign: "start" }}>
          <div style={{ fontWeight: "bold", fontSize: 17, marginBottom: 4 }}>
            {item.title}
          </div>
          <div style={{ fontSize: 14, color: "gray", marginBottom: 8 }}>
            {item.by}
          </div>
          <div
            style={{
              height: 90,
              width: 330,
              backgroundColor: "#d3d3d3",
              marginLeft: -25,
              position: "absolute",
              bottom: 0,
              textAlign: "center",
            }}
          >
            <div className="flexRow">
              <div style={{ width: "40%", textAlign: "start", padding: 10 }}>
                <text
                  style={{
                    fontSize: 12,
                    color: "gray",
                    marginBottom: 8,
                  }}
                >
                  % Complete
                </text>
                <br />
                <text>{item.percent}</text>
              </div>
              <div style={{ width: "25%", textAlign: "start", padding: 10 }}>
                <text
                  style={{
                    fontSize: 12,
                    color: "gray",
                    marginBottom: 8,
                  }}
                >
                  Sold Out
                </text>
                <br />
                <text>{item.soldOut}</text>
              </div>
              <div style={{ width: "40%", textAlign: "start", padding: 10 }}>
                <text
                  style={{
                    fontSize: 12,
                    color: "gray",
                    marginBottom: 8,
                  }}
                >
                  # of tokens sold
                </text>
                <br />
                <text>{item.numTokens}</text>
              </div>
              <div style={{ width: "40%", textAlign: "start", padding: 10 }}>
                <text
                  style={{
                    fontSize: 12,
                    color: "gray",
                    marginBottom: 8,
                  }}
                >
                  Value of token
                </text>
                <br />
                <text>{item.tokenValue} NEAR</text>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </a>
  );
};
