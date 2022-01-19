import { render, screen } from '@testing-library/react';
import {calculateAge } from './App';
import App from './App';


test('test  calculateAge', () => {
  expect(calculateAge(1642613895371, 1296604800000)).toEqual(10)
});


// test('renders learn submitHandlerk', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
