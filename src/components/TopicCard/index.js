import React from "react";
import { Card, Progress } from "antd";
import { Grid, Typography } from "@mui/material";
import "./topicCard.css";

function TopicCard({ item }) {
  return (
    <Grid
      item
      xs={12}
      md={4}
      sm={6}
      bgColor="white"
      borderRadius="xl"
      shadow="lg"
      justifyContent="center"
      alignItems="center"
      sx={{ mb: 2 }}
      key={item.position}
      sx={{
        overflow: "hidden",
        transform: "perspective(999px) rotateX(0deg) translate3d(0, 0, 0)",
        transformOrigin: "50% 0",
        backfaceVisibility: "hidden",
        willChange: "transform, box-shadow",
        transition: "transform 200ms ease-out",

        "&:hover": {
          transform:
            "perspective(999px) rotateX(7deg) translate3d(0px, -4px, 5px)",
        },
      }}
    >
      {/* <Link to={pro ? "/" : route}> */}

      <Card
        title={item.topicName}
        bordered={false}
        style={{
          background: "#00fff1",
        }}
      >
        <Grid container>
          <Grid item sm={9}>
            <Typography variant="body2">
              {" "}
              Total Question: {item.questions.length}
            </Typography>
          </Grid>
          <Grid item sm={3}>
            {" "}
            <Progress type="circle" percent={90} size={40} />
          </Grid>
        </Grid>
      </Card>
      {/* </Link> */}
    </Grid>
  );
}

export default TopicCard;
