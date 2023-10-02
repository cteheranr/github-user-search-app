import { SearchUserProvider } from '../../Contexts/ContextSearchUser/ContextSearchUser';
import { ThemeProvider } from '../../Contexts/ContextThemes/ContextThemes'; 
import { AppUI } from './AppUI';

function App() {
  return (
    <ThemeProvider>
      <SearchUserProvider>
        <AppUI/>
      </SearchUserProvider>
    </ThemeProvider>
  );
}

export default App;
