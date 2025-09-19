import {
  Header,
  HeaderContainer,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderNavigation,
  HeaderSideNavItems,
  SideNav,
  SideNavItems,
  SkipToContent,
} from "@carbon/react";
import { Link } from "@tanstack/react-router";
import HeaderName from "./HeaderName";

export default function RootHeader() {
  const navigationItems = [
    { to: "/plattegrond", label: "Plattegrond" },
    { to: "/about", label: "About" },
  ];

  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label="Kamer Watch">
          <SkipToContent />
          <HeaderMenuButton
            aria-label={isSideNavExpanded ? "Close menu" : "Open menu"}
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
            aria-expanded={isSideNavExpanded}
          />
          <HeaderName as={Link} to="/">
            KamerWatch
          </HeaderName>

          <HeaderNavigation>
            {navigationItems.map((item) => (
              <HeaderMenuItem key={item.to} as={Link} to={item.to}>
                {item.label}
              </HeaderMenuItem>
            ))}
          </HeaderNavigation>

          <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            isPersistent={false}
            onSideNavBlur={onClickSideNavExpand}
          >
            <SideNavItems>
              <HeaderSideNavItems>
                {navigationItems.map((item) => (
                  <HeaderMenuItem
                    key={`mobile-${item.to}`}
                    as={Link}
                    to={item.to}
                  >
                    {item.label}
                  </HeaderMenuItem>
                ))}
              </HeaderSideNavItems>
            </SideNavItems>
          </SideNav>
        </Header>
      )}
    />
  );
}
