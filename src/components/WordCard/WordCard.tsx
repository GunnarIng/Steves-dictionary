import React from 'react';
import { WordData } from './types';

interface WordCardProps {
  wordData: WordData;
}


const WordCard: React.FC<WordCardProps> = ({ wordData }) => {
  return (
    <div>
      <h2>{wordData.word}</h2>
      {wordData.phonetics.map((phonetic, index) => (
        <div key={index}>
          <p>{phonetic.text}</p>
          {phonetic.audio && (
            <audio controls src={phonetic.audio}>
              Your browser does not support the audio element.
            </audio>
          )}
        </div>
      ))}
      {wordData.meanings.map((meaning, index) => (
        <div key={index}>
          <h3>{meaning.partOfSpeech}</h3>
          {meaning.definitions.map((definition, defIndex) => (
            <div key={defIndex}>
              <p>{definition.definition}</p>
              {definition.example && <p>Example: {definition.example}</p>}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default WordCard
