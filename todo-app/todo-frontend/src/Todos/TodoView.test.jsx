import { render, screen, waitFor } from '@testing-library/react'
import TodoView from './TodoView'
import axios from '../util/apiClient'

// Mock axios
vi.mock('../util/apiClient', () => ({
    default: {
        get: vi.fn(),
        post: vi.fn(),
        put: vi.fn(),
        delete: vi.fn()
    }
}))

describe('TodoView', () => {
    beforeEach(() => {
        // Clear mocks between tests
        vi.clearAllMocks()
    })

    it('renders the heading and fetches todos', async () => {
        axios.get.mockResolvedValueOnce({
            data: [
                { _id: '1', text: 'Test todo', done: false }
            ]
        })

        render(<TodoView />)

        // Check if heading is rendered
        expect(screen.getByText('Todos')).toBeDefined()

        // Wait for todos to be fetched and displayed in the list
        await waitFor(() => {
            expect(axios.get).toHaveBeenCalledWith('/todos')
        })
    })
})
