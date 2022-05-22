import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { MockedProvider } from '@apollo/client/testing';
import { getBlogItems, BlogItems } from './BlogItems';
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../theme'

const mocksError = [
    {
        request: {
            operationName: 'getBlogItems',
            query: getBlogItems,
        },
        error: new Error('An error occurred'),
    },
]

const mocksEmpty = [
    {
        request: {
            operationName: 'getBlogItems',
            query: getBlogItems,
        },
        result: {
            data: {},
        },
    },
]

const mocks = [
    {
        request: {
            operationName: 'getBlogItems',
            query: getBlogItems,
        },
        result: {
            data: {
                "blogPostCollection": {
                    "items": [
                        {
                            "sys": {
                            "id": "7z390rRzomW3yAmjyx0vwK"
                            },
                            "title": "Aenean Varius Elit",
                            "body": "Aenean varius elit tempor finibus consectetur. Curabitur fringilla ex vel leo tristique, sed faucibus arcu consectetur."
                        },
                        {
                            "sys": {
                            "id": "2gZ8jeLpaLcUHyBIBiBbTq"
                            },
                            "title": "Aliquam Laoreet",
                            "body": "Aliquam laoreet semper ultrices. Sed finibus eget libero ac suscipit. Ut luctus lacus arcu, at sollicitudin eros porttitor at."
                        },
                    ]
                },
            },
        },
    },
]


it('displays a loading message when fetching', () => {
    const component = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <BlogItems />
      </MockedProvider>,
    );

    const tree = component.container
    expect(tree.firstChild.textContent).toMatch('Loading');
});

it('displays an error if ajax call fails', async () => {
    const component = render(
      <MockedProvider mocks={mocksError} addTypename={false}>
        <BlogItems />
      </MockedProvider>,
    );

    await act(async (): Promise<void> => {
        await new Promise((resolve) => setTimeout(resolve, 0));
    });
    const tree = component.container
    expect(tree.firstChild.textContent).toMatch('Error');
});

it('displays an message if no blog items were found', async () => {
    const component = render(
      <MockedProvider mocks={mocksEmpty} addTypename={false}>
        <BlogItems />
      </MockedProvider>,
    );

    await act(async (): Promise<void> => {
        await new Promise((resolve) => setTimeout(resolve, 0));
    });
    const tree = component.container
    expect(tree.firstChild.textContent).toMatch('No blog items found');
});

it('correctly loads some blog items after loading completes', async () => {
    const component = render(
        <ThemeProvider theme={theme}>
            <MockedProvider mocks={mocks} addTypename={false}>
                <BlogItems />
            </MockedProvider>,
        </ThemeProvider>
    );
    
    await act(async (): Promise<void> => {
        await new Promise((resolve) => setTimeout(resolve, 0));
    });
    const tree = component.container
    expect(tree.querySelectorAll('a').length).toBe(2);
});