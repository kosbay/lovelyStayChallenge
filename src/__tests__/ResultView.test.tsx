import renderer from 'react-test-renderer'

import { ResultView } from "../components"

describe('ResultView', () => {
  it('should render error case with message', () => {
    const testRenderer = renderer.create(<ResultView
      isError={true}
      isNotFound={false}
      isInitialState={false}
      errorMessage="Some Error"
    />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('should render not found case', () => {
    const testRenderer = renderer.create(<ResultView
      isError={false}
      isNotFound={true}
      isInitialState={false}
    />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('should render initial state case', () => {
    const testRenderer = renderer.create(<ResultView
      isError={false}
      isNotFound={false}
      isInitialState={true}
    />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});