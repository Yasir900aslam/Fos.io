import React from "react";
import NextLink from "next/link";
import { Row, Col, Grid, Divider, Link } from "@geist-ui/react";
export default function Footer() {
  return (
    <>
      <div style={{ marginLeft: "15px", marginTop: "50px" }}>
        <Divider />
        <Grid.Container gap={1}>
          <Grid xs={8} direction="column">
            <Row>
              <Col>
                <NextLink href="/en-us/components/button">
                  <Link block>Github</Link>
                </NextLink>
              </Col>
            </Row>
            <Row>
              <NextLink href="/en-us/components/button">
                <Link block>LinkedIn</Link>
              </NextLink>
            </Row>
            <Row>
              <Col>
                <NextLink href="/en-us/components/button">
                  <Link block>Buy me a coffee </Link>
                </NextLink>
              </Col>
            </Row>
          </Grid>
          <Grid xs={8}>
            <Row>
              <Col>
                <NextLink href="/en-us/components/button">
                  <Link block>Developers API</Link>
                </NextLink>
              </Col>
            </Row>
          </Grid>
          <Grid xs={8}>
            <Row>
              <Col>
                <NextLink href="/en-us/components/button">
                  <Link block>Documentation</Link>
                </NextLink>
              </Col>
            </Row>
          </Grid>
        </Grid.Container>
      </div>
    </>
  );
}
