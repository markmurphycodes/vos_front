import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

import { Button, Typography } from "@material-ui/core";

import CodeIcon from "@material-ui/icons/Code";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import CodeDrawer from "./codeDrawer";
import TerminalDrawer from "./terminalDrawer";

const BottomNav = () => {
  const [openCode, setOpenCode] = useState(false);
  const [openTerm, setOpenTerm] = useState(false);

  return (
    <>
      <Row>
        <Col>
          <CodeDrawer
            className="ml-10 mr-10"
            open={openCode}
            setOpen={setOpenCode}
          />
        </Col>
        <Col>
          <TerminalDrawer
            className="ml-10 mr-10"
            open={openTerm}
            setOpen={setOpenTerm}
          />
        </Col>
      </Row>

      <div
        style={{
          margin: 0,
          top: "auto",
          right: 20,
          bottom: 20,
          left: "auto",
          position: "fixed",
        }}
      >
        <Button
          style={{ position: "relative", top: "auto", bottom: "auto" }}
          onClick={() => setOpenCode(!openCode)}
        >
          <CodeIcon />
          <Typography variant="caption">
            {openCode ? "Close " : "Open "}editor
          </Typography>
        </Button>

        <Button
          style={{ position: "relative", top: "auto", bottom: "auto" }}
          onClick={() => setOpenTerm(!openTerm)}
        >
          <ArrowForwardIosIcon />
          <Typography variant="caption">
            {openTerm ? "Close " : "Open "}terminal
          </Typography>
        </Button>
      </div>
    </>
  );
};

export default BottomNav;
