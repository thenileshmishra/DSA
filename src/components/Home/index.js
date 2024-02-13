import { Container, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import data from "../../DSA450";
import TopicCard from "../TopicCard";
import { Progress } from "antd";

function Home() {
  const isSmOrDown = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  console.log(data[0]);

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} textAlign="center" mx="auto">
          <Typography variant="h3" color="#ffffff" mt={2} mb={1}>
            450 DSA
          </Typography>
        </Grid>
        <Grid item xs={12} textAlign="center" mx="auto">
          <Typography
            variant="span"
            color="#ffffff"
            mt={2}
            mb={1}
            textAlign={"center"}
          >
            Total Questions Soved
          </Typography>
        </Grid>
        <Grid
          item
          md={12}
          style={{
            display: isSmOrDown ? "none" : "block",
          }}
        >
          <Progress
            percent={60}
            strokeColor={{
              "0%": "#108ee9",
              "100%": "#87d068",
            }}
          />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} justifyContent="center" alignItems="center">
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {data.map((item) => (
              <TopicCard item={item} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
