import React from 'react'
import { WordData } from './types'

interface WordCardProps {
  wordData: WordData | null
}

// This is the card that will be used to display the word and its definitions
const WordCard: React.FC<WordCardProps> = ({ wordData }) => {
  if (!wordData) {
    return null
  }

  return (
    <div className="word-container">
      <div></div>
      <h2>{wordData.word}</h2>
      {wordData.phonetics[0] && (
        <div className='phonetics'>
          <p>{wordData.phonetics[0].text}</p>
          {wordData.phonetics[0].audio && (
            <audio controls src={wordData.phonetics[0].audio}>
              Your browser does not support the audio element.
            </audio>
          )}
        </div>
      )}
      {wordData.meanings.map((meaning, index) => (
        <div className='def-container' key={index}>
          <h3>{meaning.partOfSpeech}</h3>
          <h5>Definition:</h5>
          {meaning.definitions.map((definition, defIndex) => (
            <div key={defIndex}>
              <p>{definition.definition}</p>
              {definition.example && <p>Example: {definition.example}</p>}
              {definition.synonyms && definition.synonyms.length > 0 && (
                <div className='synonyms'>
                  <h5>Synonyms:</h5>
                  {definition.synonyms.map((synonym, synIndex) => (
                    <p key={synIndex}>{synonym}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
          {meaning.antonyms && meaning.antonyms.length > 0 && (
            <div className='antonyms'>
              <h5>Antonyms:</h5>
              {meaning.antonyms.map((antonym, antIndex) => (
                <p key={antIndex}>{antonym}</p>
              ))}
            </div>
          )}
        </div>
      ))}
      {wordData.sourceUrls &&
        wordData.sourceUrls.map((url, urlIndex) => (
          <a key={urlIndex} href={url}>
            {url}
          </a>
        ))}
    </div>
  )
}

export default WordCard