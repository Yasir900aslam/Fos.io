import React from "react";
import {
  Grid,
  Text,
  Button,
  Divider,
  Spacer,
  Avatar,
  Row,
  Col,
} from "@geist-ui/react";
export default function Header() {
  return (
    <>
      <Grid.Container gap={2}>
        <Grid xs={12}>
          <Row>
            <Col>
              <Text h1>Fos.io</Text>
            </Col>
          </Row>
        </Grid>
        <Grid xs={12} style={{ marginTop: "20px" }}>
          <Button size="small" shadow type="secondary">
            Login
          </Button>
          <Spacer x={1} />
          <Button size="small" type="default">
            Sign up
          </Button>
          <Spacer x={5} />
          <Avatar text="W" />
        </Grid>
      </Grid.Container>
      <Divider />
    </>
  );
}
