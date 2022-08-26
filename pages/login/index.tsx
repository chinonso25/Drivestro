import {
  Button,
  Checkbox,
  Container,
  Input,
  Link,
  Spacer,
} from "@nextui-org/react";
import { Text } from "@nextui-org/react";
import { AiFillGoogleCircle } from "react-icons/ai";
import Footer from "../../components/common/Footer";

function DetailsForm() {
  return (
    <Container fluid responsive css={{ p: 0 }}>
      <Spacer y={1} />
      <Input label="Email" placeholder="Guillermo Rauch" width="100%" />
      <Spacer y={1} />
      <Input
        label="Password"
        type="password"
        placeholder="at least 8 characters"
        width="100%"
      />
      <Spacer />
      <Checkbox color="gradient">Remember me</Checkbox>
      <Spacer />
      <Button
        css={{
          alignSelf: "center",
          justifySelf: "center",
          w: "100%",
          my: 10,
        }}
      >
        Log in
      </Button>
      <Spacer />
      <hr style={{ width: "100%" }} />

      <div style={{ textAlign: "center" }}>
        <Text>Don&apos;t have an account</Text>
        <Link>Sign up</Link>
      </div>
    </Container>
  );
}

function SignUp() {
  return (
    <>
      <Container
        fluid
        responsive
        sm
        css={{ mt: 10, d: "flex", flexDirection: "column" }}
      >
        <Text h2>Log in</Text>
        <Spacer y={1} />
        <Button
          icon={<AiFillGoogleCircle />}
          color="none"
          css={{
            alignSelf: "center",
            justifySelf: "center",
            w: "100%",
            my: 10,
          }}
        >
          Log in with Google
        </Button>

        <hr style={{ width: "100%" }} />
        <DetailsForm />
      </Container>
      <Footer />
    </>
  );
}

export default SignUp;
