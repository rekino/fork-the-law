import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/$locale/constitution')({
  component: Constitution,
})

function Constitution() {
  return (
    <div className="p-2">
      <h3>Constitution</h3>
    </div>
  )
}