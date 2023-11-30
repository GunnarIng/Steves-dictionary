import { render, screen, test, expect } from 'vitest'
import { waitFor } from '@testing-library/react';

import WordCard from './WordCard'

test('renders without crashing', () => {
  render(<WordCard wordData={null} />)
})

test('find buttons', async () => {
  render(<WordCard wordData={null}  />);
  await waitFor(
   async () => {
      const btn = screen.getAllByRole("button", { name: "add" });
      expect(btn).toHaveLength(4)
    },
  );
});