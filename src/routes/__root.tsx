import { createRootRoute, Outlet } from '@tanstack/react-router'
import Navbar from "@/components/partials/navbar"
import i18n from '@/i18n'

export const Route = createRootRoute({
  component: () => {
    return <>
      <Navbar />
      <Outlet />
    </>
  },
  notFoundComponent: () => (
    <p>Not Found</p>
  )
})