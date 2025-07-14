import { render, screen, waitFor } from '@testing-library/react';
import { RouterProvider, createRouter, createMemoryHistory } from '@tanstack/react-router';
import { describe, it, expect } from 'vitest'
import { routeTree } from '../src/routeTree.gen'

const createTestRouter = (initialUrl: string) => {
  return createRouter({
    routeTree,
    history: createMemoryHistory({
      initialEntries: [initialUrl],
    }),
  })
}

describe('Navbar', () => {
  it('should navigate to the correct locale when language buttons are clicked', async () => {
    const router = createTestRouter('/fa/constitution');

    render(
      <RouterProvider router={router} />
    );

    const englishButton = await screen.findByText('English')
    englishButton.click();

    await waitFor(() => {
      expect(router.state.location.pathname).toBe('/en/constitution');
    });

    const persianButton = await screen.findByText('فارسی')
    persianButton.click();

    await waitFor(() => {
      expect(router.state.location.pathname).toBe('/fa/constitution');
    });
  });
});
