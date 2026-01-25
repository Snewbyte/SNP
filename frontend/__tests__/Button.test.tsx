import { render, screen } from '@testing-library/react'
import Button from '../components/Button'
import '@testing-library/jest-dom';

test('renders a Submit button', () => {
  render(<Button label="Submit" />)
  expect(screen.getByText('Submit')).toBeInTheDocument()
})