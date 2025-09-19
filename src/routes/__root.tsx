import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { RootHeader } from "@/components";
import { Content } from "@carbon/react";
import { FullPageError } from "@carbon/ibm-products";

const RootLayout = () => (
  <>
    <RootHeader />
    <Content>
      <Outlet />
    </Content>
    <TanStackRouterDevtools />
  </>
);

const NotFoundComponent = () => (
  <Content>
    <FullPageError
      title="Page not found"
      description=""
      label="Error 404"
      kind="404"
    />
  </Content>
);

const ErrorComponent = ({ error }: { error: Error }) => (
  <Content>
    <FullPageError
      title="An error occurred"
      description={error.message}
      label="Error"
      kind="custom"
    />
  </Content>
);

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});
