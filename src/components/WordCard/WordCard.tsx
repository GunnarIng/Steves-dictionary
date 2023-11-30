import React from 'react'
import { WordData } from './types'

interface WordCardProps {
  wordData: WordData | null
}

const WordCard: React.FC<WordCardProps> = ({ wordData }) => {
  if (!wordData) {
    return null
  }

  return (
    <div className="word-container">
      <h2>{wordData.word}</h2>
      {wordData.phonetics[0] && (
        <div>
          <p>{wordData.phonetics[0].text}</p>
          {wordData.phonetics[0].audio && (
            <audio controls src={wordData.phonetics[0].audio}>
              Your browser does not support the audio element.
            </audio>
          )}
        </div>
      )}
      {wordData.meanings.map((meaning, index) => (
        <div key={index}>
          <h3>{meaning.partOfSpeech}</h3>
          <h3>Definition</h3>
          {meaning.definitions.map((definition, defIndex) => (
            <div key={defIndex}>
              <p>{definition.definition}</p>
              {definition.example && <p>Example: {definition.example}</p>}
              {definition.synonyms && definition.synonyms.length > 0 && (
                <div>
                  <p>Synonyms:</p>
                  {definition.synonyms.map((synonym, synIndex) => (
                    <p key={synIndex}>{synonym}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
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
