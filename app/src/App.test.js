import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("Welocme to Mastan World ..! you have deployed your application successfully by Circleci");
  const expectedText = "Welcome to Matan World ..! you have deployed your application successfully by CircleCI";
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveTextContent(expectedText);
});



