import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const paragraphElement = screen.getByText(/React Pie Chart/i);
  expect(paragraphElement).toBeInTheDocument();
});
