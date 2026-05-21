import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio brand name', () => {
  render(<App />);
  const brandElements = screen.getAllByText(/Minh Giang/i);
  expect(brandElements.length).toBeGreaterThan(0);
});
