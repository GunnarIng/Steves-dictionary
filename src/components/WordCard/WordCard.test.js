import { expect, it, test, render } from 'vitest'
import { screen } from '@testing-library/dom'
import WordCard from './WordCard'

test('renders WordCard component', () => {
  render(<WordCard />)
  const linkElement = screen.getByText("search")
  expect(linkElement).toBeInTheDocument()
})

it('false to be false', () => {
  expect(false).toBe(false)
})
