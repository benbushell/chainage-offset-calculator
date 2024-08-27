import './App.css';

import Header from './components/Header';
import ProjectPanel from './components/ProjectPanel';
import FilePanel from './components/FilePanel';
import ViewerPanel from './components/ViewerPanel';

function App() {
  return (
    <div className = 'app'>
      <Header/>
      <div className = 'panels'>
        <ProjectPanel/>
        <FilePanel/>
        <ViewerPanel/>
      </div>
    </div>
  );
}

export default App;
