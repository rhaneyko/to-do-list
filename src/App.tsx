import { ThemeProvider } from 'styled-components';

//import dark from './styles/themes/dark';
import light from './styles/themes/light';

import GlobalStyles from './styles/GlobalStyles';
import TodoPage from './pages/TodoPage';

 const App = () => {
   //  const [ theme, setTheme ] = useState<DefaultTheme>('theme', light);
   //  const toggleTheme = () => {
   //    setTheme(theme.title === 'light' ? dark : light);
   //  }
  return (
    <ThemeProvider theme={light}>
       {/* <HomePage/> */}
       <TodoPage/>
       <GlobalStyles/>
    </ThemeProvider>
    );
}
export default App;
