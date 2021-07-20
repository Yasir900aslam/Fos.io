import React from "react";
import { Display, Grid, Code, Divider } from "@geist-ui/react";
export default function Body() {
  return (
    <>
      <Grid.Container>
        <Grid xs={24}>
          <Display
            shadow
            caption={
              <p>
                Browse <Code>Files</Code> to share.
              </p>
            }
          >
            <label
              style={{
                border: "1px solid #ccc",
                display: "inline-block",
                padding: "6px 12px",
                cursor: "pointer",
              }}
            >
              <input type="file" style={{ display: "none" }} />
              Custom Upload
            </label>
          </Display>
        </Grid>
        <Grid xs={24}>list of files</Grid>
      </Grid.Container>
      <Divider />
    </>
  );
}
