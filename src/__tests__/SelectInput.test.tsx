import renderer from 'react-test-renderer'

import { SelectInput } from "../components"

const selectOptions = [
  { value: "repositories", label: "Most repositories" },
  { value: "followers", label: "Most followers" },
  { value: "joined", label: "First joined" }
]

describe('SelectInput', () => {
  it('should render without throwing an error', () => {
    const testRenderer = renderer.create(<SelectInput
      options={selectOptions}
    />);
    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});