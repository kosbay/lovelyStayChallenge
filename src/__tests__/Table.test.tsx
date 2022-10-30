import renderer from 'react-test-renderer'

import { Table } from "../components"

const tableConfig = [
  { rowHead: 'Avatar', rowKey: 'avatar_url', isImage: true },
  { rowHead: 'Login', rowKey: 'login' },
  { rowHead: 'Type', rowKey: 'type' },
]

describe('Table', () => {
  it('should render without throwing an error', () => {
      const testRenderer = renderer.create(<Table
        tableConfig={tableConfig}
        rows={[
          {
            avatar_url: "https://avatars.githubusercontent.com/u/383316?v=4",
            login: "test",
            type: "User"
          },
          {
            avatar_url: "https://avatars.githubusercontent.com/u/20162049?v=4",
            login: "testerSunshine",
            type: "User"
          },
          {
            avatar_url: "https://avatars.githubusercontent.com/u/21636478?v=4",
            login: "TestLeafPages",
            type: "User"
          }
        ]}
        pageCount={10}
        currentPage={1}
        count={100}
        pageDataCount={10}
        offset={10}
        onChange={() => {}}
      />);
      expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
