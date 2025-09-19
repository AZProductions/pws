import { SidePanel } from "@carbon/ibm-products";
import { Button, Tile } from "@carbon/react";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createLazyFileRoute("/plattegrond")({
  component: RouteComponent,
});

function RouteComponent() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tile>
        <Button onClick={() => setOpen((prev) => !prev)}>
          Open side panel
        </Button>
      </Tile>
      <SidePanel
        size="sm"
        open={open}
        slideIn={false}
        animateTitle={false}
        includeOverlay={false}
        onRequestClose={() => setOpen(false)}
        selectorPageContent="#main-content"
        title="Title"
        placement="right"
        subtitle="Testing subtitle text."
      >
        <div id="main-content">Lorem ipsum dolor sit amet...</div>
      </SidePanel>
    </>
  );
}
