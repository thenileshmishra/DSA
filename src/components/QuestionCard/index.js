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
} from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import cn from "../../assests/download.jpeg";
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
    <div>
      {questions.length && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: "10px" }}>S.No</TableCell>
                <TableCell>Question</TableCell>
                <TableCell>Link</TableCell>
                <TableCell>Bookmark</TableCell>
                <TableCell>Done</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {questions.map((row, index) => (
                <TableRow key={index} style={{ height: "5px" }}>
                  <TableCell sx={{ padding: 1, textAlign: "center" }}>
                    {index + 1}
                  </TableCell>
                  <TableCell sx={{ padding: 1 }}>{row.Problem}</TableCell>
                  <TableCell
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
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
                  <TableCell>
                    <IconButton aria-label="bookmark">
                      <BookmarkIcon
                        style={{ color: row.bookmark ? "green" : "" }}
                      />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton aria-label="bookmark">
                      <BookmarkIcon
                        style={{ color: row.bookmark ? "green" : "" }}
                      />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}

export default QuestionCard;
