import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider } from '@tanstack/react-query'
import Main from './features/Main/components/Main/Main'
import { queryClient } from './shared/utils/queryClient'
import './shared/styles/_reset.scss'

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Main/>
  </QueryClientProvider>
)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
