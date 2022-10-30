import ContentLoader from './ContentLoader'

export type ResultViewProps = {
  isError: boolean
  isNotFound: boolean
  isInitialState: boolean
  isLoading: boolean
  errorMessage?: string
}

const ResultView: React.FC<ResultViewProps> = ({
  isError,
  isNotFound,
  isInitialState,
  isLoading,
  errorMessage
}) => {
  console.log('isError', isError)
  return (
    <>
      { 
        (() => {
          if(isError) {
            return (
              <div className="resultView">
                <img src="/images/error-icon.svg" />
                <p>{errorMessage}</p>
              </div>
              
            );
          } else if(isNotFound) {
            return (
              <div className="resultView">
                <img src="/images/not-found-icon.svg" />
                <p>Result not found</p>
              </div>
            )
          } else if(isInitialState) {
            return (
              <div className="resultView">
                <img src="/images/result-view-icon.svg" />
                <p>Result will be here</p>
              </div>
            )
          } else if(isLoading) {
            return <ContentLoader />
          } else {
            return null
          }
        })()
      }
    </>
  )
}

export default ResultView
