import {
  Header,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
  SkipToContent,
} from "@carbon/react";
import { Link } from "@tanstack/react-router";

export default function RootHeader() {
  return (
    <>
      <Header>
        <SkipToContent />
        <HeaderName as={Link} to="/" prefix="Kamer">
          Watch
        </HeaderName>
        <HeaderNavigation>
          <HeaderMenuItem as={Link} to="/">
            Home
          </HeaderMenuItem>
          <HeaderMenuItem as={Link} to="/about">
            About
          </HeaderMenuItem>
        </HeaderNavigation>
      </Header>
    </>
  );
}
