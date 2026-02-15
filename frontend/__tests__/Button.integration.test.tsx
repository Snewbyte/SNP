import { render, screen, fireEvent } from '@testing-library/react'
import Button from '../components/Button'
import '@testing-library/jest-dom'

describe('Button integration with catfact API', () => {
  afterEach(() => {
    jest.restoreAllMocks();
    // @ts-ignore
    delete global.fetch;
  });

  test('fetches and displays cat fact on click', async () => {
    const mockResponse = { fact: 'Cats are awesome' };
    // @ts-ignore
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => mockResponse,
    });

    render(<Button label="Get Fact" />)

    const button = screen.getByText('Get Fact') as HTMLButtonElement
    fireEvent.click(button)

    // loading state
    expect(screen.getByText('Loading...')).toBeInTheDocument()
    expect(button).toBeDisabled()

    // fact appears
    const factLabel = await screen.findByText('Cat Fact:')
    expect(factLabel).toBeInTheDocument()
    expect(screen.getByText(mockResponse.fact)).toBeInTheDocument()

    // button re-enabled
    expect(button).not.toBeDisabled()
  })

  test('shows error when response not ok', async () => {
    // @ts-ignore
    global.fetch = jest.fn().mockResolvedValue({ ok: false });

    render(<Button label="Get Fact" />)
    fireEvent.click(screen.getByText('Get Fact'))

    const error = await screen.findByText(/Error:/i)
    expect(error).toHaveTextContent('Error: Failed to fetch cat fact')
  })

  test('shows error when fetch throws', async () => {
    // @ts-ignore
    global.fetch = jest.fn().mockRejectedValue(new Error('Network Error'));

    render(<Button label="Get Fact" />)
    fireEvent.click(screen.getByText('Get Fact'))

    const error = await screen.findByText(/Error:/i)
    expect(error).toHaveTextContent('Error: Network Error')
  })
})
