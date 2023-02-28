import { render,screen } from "@testing-library/react"
import App from "./App"

describe('App', () => { 
    it('should render without crashing', () => {
        render(<App/>)
        const appElement = screen.getByTestId('app')
        expect(appElement).toBeInTheDocument()
    })
})