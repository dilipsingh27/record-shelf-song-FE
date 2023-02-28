import makeRequest from "../../../utils/makeRequest";
import {render,screen,waitFor} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Genre from "..";

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

describe("Genre", () => {

    // it("should render loading when data is rendering", () => {
    //     makeRequest.mockResolvedValue(mockData);
    //     render(<BrowserRouter><Genre/></BrowserRouter>);
    //     const genreElement = screen.getByText("loading...",{exact:false});
    //     expect(genreElement).toBeInTheDocument();
    //   });

      it("should render display genres details after data rendering", async() => {
        makeRequest.mockResolvedValue(mockData);
        render(<BrowserRouter><Genre/></BrowserRouter>);
        // const genreElement = screen.getByText("loading...",{exact:false});
        // expect(genreElement).toBeInTheDocument();
        await waitFor(()=>{
            const genreElement = screen.getByTestId("genre");
            expect(genreElement).toBeInTheDocument();
        })
      });


    it('should navigate to all songs', async () => {
        makeRequest.mockResolvedValue(mockData);
        render(
            <BrowserRouter>
                <Genre />
            </BrowserRouter>
        );
        await waitFor(()=>{
            const linkElement = screen.getByTestId('songs');
            expect(linkElement).toHaveAttribute('href', '/allSongs')
        })
    })


})