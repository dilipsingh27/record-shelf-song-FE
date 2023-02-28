import AllSongs from "..";
import { render, screen,waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import makeRequest from "../../../utils/makeRequest";

jest.mock("../../../utils/makeRequest");

const mockData = {
    data: [
        {
            id: "45e1d753-2986-43cb-9b9d-30c370056319",
            name: "This Love",
            genre: {
              id: "128aa7f8-c943-48ce-b352-7edd26fa4c6e",
              name: "Pop",
            },
            artist: {
              id: "496b0a85-2bfa-45bc-8d0f-57fe0ce55708",
              name: "Maroon 5",
            },
            imageUrl:
              "https://i.scdn.co/image/ab67616d0000b27317b3850d758fff5a2301e537",
            publishedAt: "2002-06-25T00:00:00",
        }, 
    ],
};

describe('Song Snapshot', () => {
    it('should match snapshot', () => {
        makeRequest.mockResolvedValue(mockData);
        const { asFragment } = render(
            <BrowserRouter>
                <AllSongs />
            </BrowserRouter>
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('should render all songs', async () => {
        makeRequest.mockResolvedValue(mockData);
        render(
            <BrowserRouter>
                <AllSongs />
            </BrowserRouter>
        );
        await waitFor(() => {
            const songCards = screen.getByText('all Songs')
            expect(songCards).toBeInTheDocument();
        })
    })

    // it('should render exact number of the cards', async () => {
    //     makeRequest.mockResolvedValue(mockData);
    //     render(
    //         <BrowserRouter>
    //             <AllSongs />
    //         </BrowserRouter>
    //     );
    //    await waitFor(() => {
    //     const songCards = screen.getAllByTestId('Card');
    //     expect(songCards.length).toEqual(1);
    //    })
    // })

    it('should render the container component without crashing when page is loaded', async () => {
        makeRequest.mockResolvedValue(mockData);
        render(
            <BrowserRouter>
                <AllSongs />
            </BrowserRouter>
        );
        await waitFor(() => {
            const container = screen.getByTestId('songs');
            expect(container).toBeInTheDocument();
        })
    })

    it('should navigate to genre page when genre icon is clicked', async () => {
        makeRequest.mockResolvedValue(mockData);
        render(
            <BrowserRouter>
                <AllSongs />
            </BrowserRouter>
        );
        await waitFor(() => {
            const genreIcon = screen.getByTestId('genre');
            expect(genreIcon).toBeInTheDocument();
        })
    })


})

