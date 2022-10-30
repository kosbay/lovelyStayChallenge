import renderer from 'react-test-renderer'

import { ContentLoader } from "../components"

describe('ContentLoader', () => {
  it('should render without throwing an error', () => {
    const testRenderer = renderer.create(<ContentLoader />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});