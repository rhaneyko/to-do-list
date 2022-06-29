import { ThemeProvider } from 'styled-components';

import theme from './styles/themes/theme';

import GlobalStyles from './styles/GlobalStyles';
import TodoPage from './pages/TodoPage';

 const App = () => {
  return (
    <ThemeProvider theme={theme}>
       <TodoPage/>
       <GlobalStyles/>
    </ThemeProvider>
    );
}
export default App;
