import GlobalStyle from './styles/GlobalStyle'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store'
import Routes from './routes'

const App = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} />
        <Router>
            <Routes />
        </Router>
        <GlobalStyle />
    </Provider>
)

export default App
