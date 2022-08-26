import {
  Avatar,
  Button,
  Card,
  Container,
  Row,
  Spacer,
  Text,
} from "@nextui-org/react";
import Head from "next/head";
import { BiCurrentLocation } from "react-icons/bi";
import Footer from "../../components/common/Footer";

function ExperienceGrid() {
  return (
    <Container
      gap={0}
      css={{ d: "flex", flexWrap: "nowrap", marginBottom: 20 }}
    >
      <Card>
        <Card.Body css={{ textAlign: "center" }}>
          <Text>Hourly Rate</Text>
          <Text h5>£34</Text>
        </Card.Body>
      </Card>
      <Spacer />
      <Card>
        <Card.Body css={{ textAlign: "center" }}>
          <Text>Gearbox</Text>
          <Text h5>Automatic</Text>
        </Card.Body>
      </Card>
      <Spacer />
      <Card>
        <Card.Body css={{ textAlign: "center" }}>
          <Text>Experience</Text>
          <Text h5>3 years</Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

function HeadDetails() {
  return (
    <Head>
      <title>Adam Friedland | Drivestro</title>
      <meta
        property="og:title"
        content="Adam Friedland | Drivestro"
        key="title"
      />
    </Head>
  );
}

function InstructorProfile() {
  return (
    <>
      <HeadDetails />
      <Container fluid responsive css={{ marginTop: "$10" }} sm>
        <Container gap={0} css={{ d: "flex", flexWrap: "nowrap" }}>
          <Avatar
            squared
            src="https://i.pravatar.cc/200?u=a042581f4e29026024d"
            css={{ size: "$20" }}
            color="gradient"
            bordered
            zoomed
          />
          <Text h3 css={{ alignSelf: "center", marginLeft: 10 }}>
            @AdamFriedland
          </Text>
        </Container>
        <Text h2 css={{ margin: "10px 0px" }}>
          Adam Friedland
        </Text>

        <Container
          css={{
            p: 0,
            margin: "20px 0px",
            justifyContent: "space-between",
            d: "flex",
          }}
        >
          <Text size={24} css={{ m: 0, padding: 0 }}>
            <BiCurrentLocation /> London, UK
          </Text>
          <Button size="sm" css={{ alignSelf: "center" }}>
            Message
          </Button>
        </Container>

        <ExperienceGrid />

        <Card css={{ $$cardColor: "$colors$primary" }}>
          <Card.Body>
            <Row justify="center" align="center">
              <Text h6 size={18} color="white" css={{ m: 0 }}>
                I am committed to providing driver training in safe, calm and
                friendly manner. The learner will be put on easy mode to
                understand the skills required for safe driving. My aim is not
                to help the learner pass the test but also be safe on the road.
              </Text>
            </Row>
          </Card.Body>
        </Card>
      </Container>
      <Footer />
    </>
  );
}

export default InstructorProfile;
