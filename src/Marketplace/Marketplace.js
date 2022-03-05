import "regenerator-runtime/runtime";
import React from "react";
import { useParams } from "react-router";
import { upcomingLaunches } from "../Home/Home";
import { Card } from "antd";

export default function Marketplace(props) {
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
      {/* <img src={event.image} style={{ height: 300 }} resizeMode="contain" /> */}
      <h1 className="homeTitle fullWidth">{event.event}</h1>
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
        {[...Array(4).keys()].map((item) => {
          return <MarketplaceCard event={event} />;
        })}
      </div>
    </div>
  );
}

const MarketplaceCard = ({ event }) => {
  return (
    <a>
      <Card
        style={{
          height: 420,
          width: 330,
          marginBottom: 10,
          marginLeft: 10,
          marginRight: 10,
        }}
        hoverable
        cover={
          <img
            src={event.image}
            style={{
              height: 250,
              width: 330,
            }}
          />
        }
      >
        <div style={{ textAlign: "start" }}>
          <div style={{ fontWeight: "bold", fontSize: 17, marginBottom: 4 }}>
            {event.event}
          </div>
          <div style={{ fontSize: 14, color: "gray", marginBottom: 8 }}>
            {event.location}
          </div>
          <div
            style={{
              height: 70,
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
                  Wallet
                </text>
                <br />
                <text> 0x1234567890</text>
              </div>
              <div style={{ width: "30%", textAlign: "start", padding: 10 }}>
                <text
                  style={{
                    fontSize: 12,
                    color: "gray",
                    marginBottom: 8,
                  }}
                >
                  Price
                </text>
                <br />
                <text>3.3 NEAR</text>
              </div>
              <div style={{ width: "25%", textAlign: "start", padding: 10 }}>
                <text
                  style={{
                    fontSize: 12,
                    color: "gray",
                    marginBottom: 8,
                  }}
                >
                  Token No.
                </text>
                <br />
                <text>1/50</text>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </a>
  );
};
