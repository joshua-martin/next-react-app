import { render } from '@testing-library/react';

import { MockedProvider } from '@apollo/client/testing';
import BlogItems from './BlogItems';


it('displays a loading message when fetching', () => {
    const component = render(
      <MockedProvider addTypename={false}>
        <BlogItems />
      </MockedProvider>,
    );

    const tree = component.container
    expect(tree.firstChild.textContent).toMatch('Loading');
});