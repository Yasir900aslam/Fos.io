import React from "react";
import { Grid, Text, Button, Divider } from "@geist-ui/react";
export default function Header() {
  return (
    <>
      <Grid.Container gap={2}>
        <Grid xs={12}>
          <Text>File.io</Text>
        </Grid>
        <Grid xs={12}>
          <Button>Login</Button>
          <Button>Sign up</Button>
        </Grid>
      </Grid.Container>
      <Divider />
    </>
  );
}
