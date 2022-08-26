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
      <Input label="Full Name" placeholder="Guillermo Rauch" width="100%" />
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
      <Checkbox color="gradient">I agree with Terms and Privacy</Checkbox>
      <Spacer />
      <Button
        css={{
          alignSelf: "center",
          justifySelf: "center",
          w: "100%",
          my: 10,
        }}
      >
        Sign Up
      </Button>
      <Spacer />
      <hr style={{ width: "100%" }} />

      <div style={{ textAlign: "center" }}>
        <Text>Already have an account</Text>
        <Link>Log in</Link>
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
        css={{ mt: 10, d: "flex", flexDirection: "column" }}
        sm
      >
        <Text h2>Sign Up</Text>
        <Spacer y={1} />
        <Button
          icon={<AiFillGoogleCircle />}
          color={undefined}
          css={{
            alignSelf: "center",
            justifySelf: "center",
            w: "100%",
            my: 10,
          }}
        >
          Sign up with Google
        </Button>

        <hr style={{ width: "100%" }} />
        <DetailsForm />
      </Container>
      <Footer />
    </>
  );
}

export default SignUp;
