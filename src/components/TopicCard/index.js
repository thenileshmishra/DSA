import React from "react";
import { Progress } from "antd";
import { Grid, Card, Typography, CardContent } from "@mui/material";
import { Link } from "react-router-dom";

function TopicCard({ item }) {
  return (
    <Grid
      item
      xs={12}
      md={4}
      sm={6}
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
      <Link
        to={`/${item.topicName.replace(/[^A-Z0-9]+/gi, "_").toLowerCase()}`}
        style={{ textDecoration: "none" }}
      >
        <Card
          sx={{ minWidth: 275, minHeight: 160 }}
          style={{
            cursor: "pointer",
            background: "#9bc3a9",
            borderRadius: "15px",
          }}
        >
          <CardContent>
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Grid container mb={2} borderBottom={1} color={"white"}>
                <Grid item sm={12}>
                  <Typography variant="h5" color={"black"}>
                    {item.topicName}
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                container
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Grid item sm={10}>
                  <Typography variant="body2">
                    {" "}
                    Total Question: {item.questions.length}
                  </Typography>
                  <Typography variant="body2">
                    {" "}
                    Bookmarked: {item.questions.length}
                  </Typography>

                  <Typography variant="body2"> Not started yet</Typography>
                </Grid>
                <Grid item sm={2}>
                  {" "}
                  <Progress type="circle" percent={90} size={50} />
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
}

export default TopicCard;
