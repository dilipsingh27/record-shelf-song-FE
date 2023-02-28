import makeRequest from '..';
import axios from 'axios';

import {
    BACKEND_URL,
    GET_SONGS,
    UPDATE_SONG_LIKE_BY_ID,
} from '../../../constants/apiEndPoints';
// import { ERROR_ROUTE } from '../../../constants/routes';

jest.mock('axios');

const mockData = {
    data: [
        {
            id: '45e1d753-2986-43cb-9b9d-30c370056319',
            name: 'This Love',
            genre: {
                id: '128aa7f8-c943-48ce-b352-7edd26fa4c6e',
                name: 'Pop',
            },
            artist: {
                id: '496b0a85-2bfa-45bc-8d0f-57fe0ce55708',
                name: 'Maroon 5',
            },
            imageUrl:
        'https://i.scdn.co/image/ab67616d0000b27317b3850d758fff5a2301e537',
        },
    ],
};

describe('makeRequest', () => {
    // here first 2 cases will come with and without body here

    it('should make api call when only api endpoint is passed', async () => {
        const mockedAxios = axios.mockResolvedValue({ data: mockData });
        expect(mockedAxios).not.toBeCalled();
        const response = await makeRequest(GET_SONGS);
        expect(mockedAxios).toHaveBeenCalledTimes(1);
        expect(mockedAxios).toHaveBeenCalledWith({
            baseURL: BACKEND_URL,
            url: '/api/records',
            headers: {
                authorization: 'Bearer QWlzaHdhcnlhIE4=',
            },
            method: 'get',
        });
        expect(response).toEqual(mockData);
    });

    it('should make api call with appropriate request options and return response body when api endpoint and request body is specified', async () => {
        const mockedAxios = axios.mockResolvedValue({
            data: { data: { like: false } },
        });
        expect(mockedAxios).not.toBeCalled();
        const response = await makeRequest(UPDATE_SONG_LIKE_BY_ID(1), {
            data: { like: false },
        });
        expect(mockedAxios).toHaveBeenCalledTimes(1);
        expect(mockedAxios).toHaveBeenCalledWith({
            baseURL: BACKEND_URL,
            url: '/api/records/1/likes',
            headers: {
                authorization: 'Bearer QWlzaHdhcnlhIE4=',
            },
            method: 'patch',
            data: {
                like: false,
            },
        });
        expect(response).toEqual({
            data: {
                like: false,
            },
        });
    });

    it('should navigate to error page with status code when API call returns error status code', async () => {
        const mockNavigate = jest.fn();
        axios.mockRejectedValueOnce({ response: { status: 500 } });
        expect(mockNavigate).not.toBeCalled();
        await makeRequest(
            UPDATE_SONG_LIKE_BY_ID(1),
            {
                data: { like: false },
            },
            mockNavigate
        );
        expect(mockNavigate).toHaveBeenCalledTimes(1);
        expect(mockNavigate).toHaveBeenCalledWith('/error/500');
    });

    it('should navigate to error page without status code when API call returns error without status code', async () => {
        const mockNavigate = jest.fn();
        axios.mockRejectedValueOnce({});
        expect(mockNavigate).not.toBeCalled();
        await makeRequest(
            UPDATE_SONG_LIKE_BY_ID(1),
            {
                data: { like: false },
            },
            mockNavigate
        );
        expect(mockNavigate).toHaveBeenCalledTimes(1);
        expect(mockNavigate).toHaveBeenCalledWith('/error');
    });
});