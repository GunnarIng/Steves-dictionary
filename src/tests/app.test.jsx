import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { afterAll, afterEach, beforeAll, expect, test } from 'vitest'
import App from '../App'

const user = userEvent.setup()
const server = setupServer(
  rest.get(
    'https://api.dictionaryapi.dev/api/v2/entries/en/Troll',
    (req, res, ctx) => {
      return res(ctx.json([{ word: 'Troll', phonetics: [], meanings: [] }]))
    }
  )
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

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

test('find Search and input a value', async () => {
  render(<App />)
  await waitFor(() => {
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
    user.type(input, 'test')
    expect(input).toHaveValue('test')
  })
})

test('renders App and performs search', async () => {
  const { getByRole, getByText } = render(<App />)
  const input = getByRole('textbox')
  const button = getByRole('button', { name: /search/i })

  user.type(input, { target: { value: 'Troll' } })
  user.click(button)

  await waitFor(() => getByText('Troll'))
})
