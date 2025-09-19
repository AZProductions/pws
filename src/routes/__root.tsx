import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { RootHeader } from "@/components";
import { Content } from "@carbon/react";

const RootLayout = () => (
  <>
    <RootHeader />
    <Content>
      <Outlet />
    </Content>
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
