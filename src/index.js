import * as ReactDOMClient from 'react-dom/client';
import './styles/index.css'
import App from './components/App';

const container = document.getElementById('root');

// Create a root.
const root = ReactDOMClient.createRoot(container);
 
// Initial render: Render an element to the root.
root.render(<App tab="home" />);
 
// During an update, there's no need to pass the container again.
root.render(<App tab="profile" />);
