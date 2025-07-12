import { render, screen } from '@testing-library/react'
import { createRouter, RouterProvider, createMemoryHistory } from '@tanstack/react-router'
import { describe, it, expect } from 'vitest'
import { routeTree } from './routeTree.gen'

const createTestRouter = (initialUrl: string) => {
  return createRouter({
    routeTree,
    history: createMemoryHistory({
      initialEntries: [initialUrl],
    }),
  })
}

describe('Router', () => {
  it('should render the home page', async () => {
    const router = createTestRouter('/')
    render(<RouterProvider router={router} />)
    await screen.findByText('Welcome Home!')
    expect(screen.getByText('Welcome Home!')).toBeInTheDocument()
  })

  it('should render the constitution page', async () => {
    const router = createTestRouter('/constitution')
    render(<RouterProvider router={router} />)
    await screen.findByRole('heading', { name: /constitution/i })
    expect(
      screen.getByRole('heading', { name: /constitution/i }),
    ).toBeInTheDocument()
  })

  it('should render a not found page for an unknown route', async () => {
    const router = createTestRouter('/some-random-route')
    render(<RouterProvider router={router} />)
    await screen.findByText('Not Found')
    expect(screen.getByText('Not Found')).toBeInTheDocument()
  })
})
