import { useRoutes } from 'react-router-dom';
import routesConfig from './routes/routesConfig';

function App(): JSX.Element {
  const routes = useRoutes(routesConfig);
  return (
    <div>
      {routes}
    </div>
  )
}

export default App
