import React, { useState, useEffect } from "react";
import "./questionCard.css";
import problems from "../../DSA450";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import CheckIcon from "@mui/icons-material/Check";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

import cn from "../../assests/Group-11-5.webp";
import gfg from "../../assests/gfg-gg-logo.svg";

function QuestionCard(props) {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const filteredQuestions = problems.find(
      (item) => item.topicName === props.data
    );
    if (filteredQuestions) {
      setQuestions(filteredQuestions.questions);
    }
  }, [props.data]);

  return (
    <Container style={{ marginTop: "10px" }}>
      <Grid Container>
        <Grid item xs={12} mb={2}>
          <Typography
            variant="h4"
            style={{
              backgroundColor: "#75e7cae0",
              borderRadius: "10px",
              padding: "5px 0px",
              fontFamily: "Space Grotesk",
              fontWeight: "800",
            }}
            textAlign={"center"}
          >
            {props.data}
          </Typography>
        </Grid>
      </Grid>
      {questions.length && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow style={{ background: "#faa" }}>
                <TableCell style={style.header}></TableCell>
                <TableCell style={style.header}>No</TableCell>
                <TableCell style={style.header}>Problem</TableCell>
                <TableCell style={style.header}>Link</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {questions.map((row, index) => (
                <TableRow key={index} style={{ height: "5px" }}>
                  <TableCell>
                    <IconButton aria-label="bookmark">
                      {row.Done ? (
                        <CheckIcon
                          style={{
                            color: "green",
                            height: "20px",
                            width: "auto",
                          }}
                        />
                      ) : (
                        <CheckBoxOutlineBlankIcon
                          style={{
                            color: "black",
                            height: "20px",
                            width: "auto",
                          }}
                        />
                      )}
                    </IconButton>
                  </TableCell>
                  <TableCell sx={{ padding: 1, textAlign: "center" }}>
                    {index + 1}
                  </TableCell>
                  <TableCell sx={{ padding: 1 }}>
                    <a
                      href={row.URL}
                      style={{ textDecoration: "none" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {row.Problem}
                    </a>
                  </TableCell>
                  <TableCell
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      padding: "0px",
                    }}
                  >
                    <IconButton aria-label="bookmark">
                      <a
                        href={row.URL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          style={{ height: "30px", width: "30px" }}
                          src={cn}
                          alt="cn"
                        />
                      </a>
                    </IconButton>
                    <IconButton aria-label="bookmark">
                      {" "}
                      <a
                        href={row.URL2}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          style={{ height: "30px", width: "30px" }}
                          src={gfg}
                          alt="gfg"
                        />
                      </a>
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
}

export default QuestionCard;

const style = {
  header: {
    fontWeight: "700",
    color: "#fff",
    fontSize: "18px",
    textAlign: "center",
    fontFamily: "Space Grotesk",
  },
};
