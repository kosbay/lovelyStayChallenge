import renderer from 'react-test-renderer'

import { UserCard } from "../components"

describe('UserCard', () => {
  it('should render without throwing an error', () => {
    const testRenderer = renderer.create(<UserCard
      avatarUrl="src"
      name="Name"
      reposTotal={20}
    />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});