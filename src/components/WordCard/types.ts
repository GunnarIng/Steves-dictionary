export interface Phonetic {
    text?: string;
    audio?: string;
  }
  
  export interface Definition {
    definition: string;
    example?: string;
    synonyms?: string[];
  }
  
  export interface Meaning {
    partOfSpeech: string;
    definitions: Definition[];
  }
  
  export interface WordData {
    word: string;
    phonetics: Phonetic[];
    meanings: Meaning[];
  }