import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, test } from 'vitest'
import App from '../App'

const user = userEvent.setup()


test('find Darkmode button', async () => {
  render(<App />)
  await waitFor(() => {
    const btn = screen.getByRole('button', { name: 'Switch to light mode' })
    expect(btn).toBeInTheDocument()
  })
})

test('Test Darkmode button', async () => {
  render(<App />)
  const btn = screen.getByRole('button', { name: 'Switch to light mode' })
  expect(btn).toBeInTheDocument()
  user.click(btn)
  await waitFor(() => {
    expect(btn).toHaveTextContent('Switch to dark mode')
  })
})
