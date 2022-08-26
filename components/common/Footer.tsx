import { Container, useTheme } from "@nextui-org/react";
import Image from "next/image";

function Footer() {
  const { isDark, type } = useTheme();
  const imageSrc = isDark ? "/drivestro.png" : "/drivestro-black.png";
  return (
    <Container
      css={{
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        textAlign: "center",
      }}
    >
      <Image
        src={imageSrc}
        height={50}
        width={175}
        style={{ borderRadius: "10px" }}
        alt="Drivestro Logo"
      />
    </Container>
  );
}

export default Footer;
