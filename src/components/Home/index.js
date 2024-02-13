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
        <Grid item lg={12} textAlign="center" mx="auto">
          <Typography variant="h3" color="black" mt={2} mb={1}>
            LOVE BABBAR
          </Typography>
        </Grid>
        <Grid item lg={12} textAlign="center" mx="auto">
          <Typography
            variant="span"
            color="black"
            mt={2}
            mb={1}
            textAlign={"center"}
          >
            Total Questions Soved
          </Typography>
        </Grid>
        <Grid item md={12} style={{ display: isSmOrDown ? "none" : "block" }}>
          <Progress percent={60} />
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
