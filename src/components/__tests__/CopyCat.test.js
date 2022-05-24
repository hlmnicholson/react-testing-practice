import { CopyCat } from '../CopyCat'

//  Make all the imports below
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

test('Should display name', () => {
// Write your solution to tasks 3-4 within this test
  render(<CopyCat name={'Mack'} value={''} handleChange={() => {}} toggleTape={() => {}} isCopying={true} />);

  const header = screen.getByText('Copy Cat Mack');
  expect(header).toBeInTheDocument();
})

test('Should display input text in paragraph when isCopying is set to true', () => {
// Write your solution to tasks 5-6 within this test
  render(<CopyCat value={'Here is an input'} handleChange={() => {}} toggleTape={() => {}} isCopying={true} />);

  const input = screen.getByRole('textbox');
  expect(input).toHaveDisplayValue('Here is an input');
  const paragraph = screen.getByText('Here is an input');
  expect(paragraph).toBeInTheDocument();
})

test('Should not display input text in paragraph when isCopying is set to false', () => {
// Write your solution to task 7 within this test
  render(<CopyCat value={'Here is an input'} handleChange={() => {}} toggleTape={() => {}} isCopying={false} />);

  const input = screen.getByRole('textbox');
  expect(input).toHaveDisplayValue('Here is an input');
  const paragraph = screen.queryByText('Here is an input');
  expect(paragraph).toBeNull();
})

