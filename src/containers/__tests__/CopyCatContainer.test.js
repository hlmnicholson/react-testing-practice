import { CopyCatContainer } from '../CopyCatContainer';

//  Make all the imports below
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

test('Should display copied text', () => {
// Write your solution to task 9 within this test
render(<CopyCatContainer />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Hello World!' } });
    expect(input).toHaveValue('Hello World!');
    
    const paragraph = screen.getByText('Hello World!'); 
    expect(paragraph).toBeInTheDocument();
})

test('Should remove copied text after removing tape', async () => {
// Write your solution to task 11 within this test
  render(<CopyCatContainer/>);
  // Simulate user typing in textbox
  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: 'My mouth is shut' } });
  // Assert that input text appears in paragraph
  let par = screen.getByText('My mouth is shut')
  expect(par).toBeInTheDocument()
  // Simulate clicking on copycat image (This will switch to quietcat image).
  const copyCatImage = screen.getByAltText('copycat')
  userEvent.click(copyCatImage)
  // Assert that paragraph text will eventually disappear when copycat image is switched over to quietcat
  await waitFor(() => {
    par = screen.queryByText('My mouth is shut');
    expect(par).toBeNull();
  });
})

test('Should display copied text after removing tape', async () => {
// Write your solution to tasks 12-13 within this test
  render(<CopyCatContainer />);
  // Simulate user clicking on copycat image
  let copyCatImage = screen.getByAltText('copycat');
  userEvent.click(copyCatImage);
  // Make sure image changes to quietcat (Cat with tape over mouth) 
  const quietCatImage = await screen.findByAltText('quietcat');
  // Simulate user typing in textbox
  expect(quietCatImage).toBeInTheDocument();
  let input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: 'Eventually this will appear '}});
   // Assert that text is not copied when image is of quietcat
  const emptyPar = screen.queryByText('Eventually this will appear');
  expect(emptyPar).toBeNull();

  // Mimic the user clicking on the 'quietcat' image.
  userEvent.click(quietCatImage);
  //Verify that that the image once again switches over to the 'copycat' state.
  copyCatImage = await screen.findByAltText('copycat');
  expect(copyCatImage).toBeInTheDocument();
  const par = await screen.findByText('Eventually this will appear');
  expect(par).toBeInTheDocument();

})

