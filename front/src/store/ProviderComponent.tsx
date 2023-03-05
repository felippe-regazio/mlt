import { Provider } from 'react-redux'
import store from './index'

const ProviderComponent: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}

export default ProviderComponent