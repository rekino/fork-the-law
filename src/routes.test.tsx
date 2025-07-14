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
  it('should render the home page for the en locale', async () => {
    const router = createTestRouter('/en/')
    render(<RouterProvider router={router} />)
    await screen.findByText('Reimagine the Constitution')
    expect(screen.getByText('Reimagine the Constitution')).toBeInTheDocument()
  })

  it('should render the home page for the fa locale', async () => {
    const router = createTestRouter('/fa/')
    render(<RouterProvider router={router} />)
    await screen.findByText('Reimagine the Constitution')
    expect(screen.getByText('Reimagine the Constitution')).toBeInTheDocument()
  })

  it('should render the constitution page for the en locale', async () => {
    const router = createTestRouter('/en/constitution')
    render(<RouterProvider router={router} />)
    await screen.findByText('Constitution')
    expect(screen.getByText('Constitution')).toBeInTheDocument()
  })

  it('should render the constitution page for the fa locale', async () => {
    const router = createTestRouter('/fa/constitution')
    render(<RouterProvider router={router} />)
    await screen.findByText('Constitution')
    expect(screen.getByText('Constitution')).toBeInTheDocument()
  })

  it('should render a not found page for an unknown route', async () => {
    const router = createTestRouter('/en/some-random-route')
    render(<RouterProvider router={router} />)
    await screen.findByText('Not Found')
    expect(screen.getByText('Not Found')).toBeInTheDocument()
  })

  it('should navigate to english index page on root', async () => {
    const router = createTestRouter('/')
    render(<RouterProvider router={router} />)
    await screen.findByText('Reimagine the Constitution')
    expect(screen.getByText('Reimagine the Constitution')).toBeInTheDocument()
  })
})
