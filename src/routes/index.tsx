import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const version = 1;

  return <h1>Hello TanStack Start {version}!</h1>;
}
