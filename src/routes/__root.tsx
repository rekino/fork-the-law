import { createRootRoute, Outlet } from '@tanstack/react-router'
import Navbar from "@/components/partials/navbar"

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <Outlet />
    </>
  ),
})