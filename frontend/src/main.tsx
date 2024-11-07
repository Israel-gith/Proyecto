import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import App from './App.tsx'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeOptions } from '@mui/material/styles'; 
//Importamos el componente Provider de la librearía react-redux
import { Provider } from 'react-redux'
//Importamos el componente store que definimos en el fichero ./store/index
import { store } from './store/index'

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#5f70ce',
    },
    secondary: {
      main: '#2e96a2',
    },
    text: {
      disabled: '#176c77',
      secondary: 'rgba(178,245,235,0.7)',
    },
    warning: {
      main: '#ed6c02',
    },
    info: {
      main: '#0288d1',
    },
    success: {
      main: '#2e7d32',
    },
  },
};


const theme = createTheme(themeOptions);

createRoot(document.getElementById('root')!).render(

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>

 )