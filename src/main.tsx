import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
// @ts-ignore
import './index.css'
import App from './components/App.tsx'
import {BrowserRouter} from "react-router";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <App/>
        </BrowserRouter>
    </StrictMode>,
)
