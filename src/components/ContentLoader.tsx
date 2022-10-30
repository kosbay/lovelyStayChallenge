import Loader from 'react-content-loader'

interface ContentLoaderProps {}

const ContentLoader: React.FC<ContentLoaderProps> = () => {
  return (
    <Loader
      viewBox="0 0 100 100"
      style={{ width: '100%', height: '100%' }}
    >
      <rect x="0" y="5" rx="1" ry="1" width="100" height="5" />
      <rect x="0" y="13" rx="1" ry="1" width="100" height="5" />
      <rect x="0" y="21" rx="1" ry="1" width="100" height="5" />
      <rect x="0" y="29" rx="1" ry="1" width="100" height="5" />
      <rect x="0" y="37" rx="1" ry="1" width="100" height="5" />
      <rect x="0" y="45" rx="1" ry="1" width="100" height="5" />
      <rect x="0" y="53" rx="1" ry="1" width="100" height="5" />
      <rect x="0" y="61" rx="1" ry="1" width="100" height="5" />
      <rect x="0" y="69" rx="1" ry="1" width="100" height="5" />
      <rect x="0" y="77" rx="1" ry="1" width="100" height="5" />
      <rect x="50" y="86" rx="1" ry="1" width="100" height="5" />
    </Loader>
  )
}

export default ContentLoader
