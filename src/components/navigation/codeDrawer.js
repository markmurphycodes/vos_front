import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-dracula";

import { Slide } from "@material-ui/core";

const onChange = (newValue) => {
  console.log(newValue);
};

const CodeDrawer = ({ open, setOpen }) => {
  return (
    <>
      <Slide
        style={{ position: "fixed" }}
        direction={"up"}
        in={open}
        onExit={() => setOpen(false)}
      >
        <AceEditor
          fontSize={14}
          mode="c_cpp"
          theme="dracula"
          onChange={onChange}
          name="aceEditor"
          editorProps={{ $blockScrolling: true }}
        />
      </Slide>
    </>
  );
};

export default CodeDrawer;
