import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import WordCard from '../components/WordCard/WordCard'
import mockApiData from '../tests/mockData/mockApiData.json'

test('renders WordCard with audio if there is any', () => {
  const wordData = mockApiData[0]

  const { container } = render(<WordCard wordData={wordData} />)

  const wordElement = screen.getAllByText(/mother/i)
  expect(wordElement.length).toBeGreaterThan(0)

  const audioElement = container.getElementsByTagName('audio')[0]
  expect(audioElement).toBeInTheDocument()
  expect(audioElement.getAttribute('src')).toBe(
    'https://api.dictionaryapi.dev/media/pronunciations/en/mother-au.mp3'
  )
})

test('dont render synonym if there is none', () => {
  const wordData = mockApiData[0]

  const { container } = render(<WordCard wordData={wordData} />)

  const wordElement = screen.getAllByText(/mother/i)
  expect(wordElement.length).toBeGreaterThan(0)

  const synonymElement = container.getElementsByClassName('synonym')
  expect(synonymElement.length).toBe(0)
})

test('render antonym if there is any', () => {
  const wordData = mockApiData[0]

  const { container } = render(<WordCard wordData={wordData} />)

  const wordElement = screen.getAllByText(/mother/i)
  expect(wordElement.length).toBeGreaterThan(0)

  const antonymElement = container.getElementsByClassName('antonyms')
  expect(antonymElement.length).toBeGreaterThan(0)
})

test('renders WordCard with mock data and SourceUrls', () => {
  const wordData = mockApiData[0]

  const { container } = render(<WordCard wordData={wordData} />);
  const audioElement = container.getElementsByTagName('audio')[0];

  const wordElements = screen.getAllByText(/mother/i)
  expect(wordElements.length).toBeGreaterThan(0)

  expect(audioElement).toBeInTheDocument()
  expect(audioElement.getAttribute('src')).toBe(wordData.phonetics[0].audio)

  const linkElements = screen.getAllByRole('link')
  expect(linkElements).toHaveLength(wordData.sourceUrls.length)
  linkElements.forEach((linkElement, index) => {
    expect(linkElement.getAttribute('href')).toBe(wordData.sourceUrls[index])
  })
})
