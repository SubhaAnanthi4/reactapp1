import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//import Subha from './Subha.jsx'
import Apps from './Apps.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Subha /> */}
    <Apps />
  </StrictMode>
)
