import {
  Button,
  Checkbox,
  Container,
  Input,
  Spacer,
  Text,
  Link,
  Avatar,
  Grid,
  useTheme,
} from "@nextui-org/react";
import Image from "next/image";

import { useState } from "react";

function CompanyLogo() {
  const { isDark, type } = useTheme();
  const imageSrc = isDark ? "/drivestro.png" : "/drivestro-black.png";

  return (
    <Container css={{ textAlign: "center" }}>
      <Image src={imageSrc} height={50} width={175} alt="Drivestro Logo" />
    </Container>
  );
}

function StepOne({ progressStep }) {
  return (
    <Container>
      <Container css={{ p: 0, m: 0, w: 125 }}>
        <Avatar
          squared
          text="You"
          size="xl"
          color="gradient"
          textColor="white"
          css={{ my: 20, h: 125, w: 125 }}
        />
      </Container>

      <Spacer />
      <Button color="secondary" css={{ w: "100%" }}>
        Upload Picture
      </Button>
      <Spacer />
      <Input
        label="Username"
        type="text"
        placeholder="Enter a username"
        width="100%"
      />
      <Spacer />

      <Button
        onPress={() => progressStep(1)}
        css={{
          alignSelf: "center",
          justifySelf: "center",
          w: "100%",
          my: 10,
        }}
      >
        Next
      </Button>
    </Container>
  );
}

function StepTwo({ progressStep }) {
  return (
    <Container>
      <Spacer />
      <Input
        label="Username"
        type="text"
        placeholder="Enter a username"
        width="100%"
      />
      <Spacer />
      <Input
        label="Location"
        type="text"
        placeholder="Enter a username"
        width="100%"
      />

      <Spacer />
      <Button onPress={() => progressStep(1)} css={{ w: "100%" }}>
        Next
      </Button>
      <Spacer />
      <Button onPress={() => progressStep(0)} css={{ w: "100%" }}>
        Back
      </Button>
    </Container>
  );
}

function StepThird() {
  return (
    <Container>
      <Text>Step 1</Text>
    </Container>
  );
}

function OnboardFlow() {
  const [page, setPage] = useState(0);
  const pageSteps = `${page + 1}/3`;
  const pageHeadings = ["Complete your profile", "Just some more details"];

  const ConditionalComponent = () => {
    switch (page) {
      case 0:
        return <StepOne progressStep={setPage} />;
      case 1:
        return <StepTwo progressStep={setPage} />;
      case 2:
        return <StepThird progressStep={setPage} />;
      default:
        return <StepOne />;
    }
  };
  return (
    <Container
      fluid
      responsive
      sm
      css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container>
        <CompanyLogo />

        <Text h3 css={{ textAlign: "center", my: 20 }}>
          {pageHeadings[page]}
        </Text>
        <ConditionalComponent />
        <Text h5 css={{ textAlign: "center" }}>
          {pageSteps}
        </Text>
      </Container>
    </Container>
  );
}

export default OnboardFlow;
