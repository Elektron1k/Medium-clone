import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalFeed from 'pages/globalFeed';
import Article from 'pages/article';
import Authentification from 'pages/authentification';
import TopBar from 'components/topBar';

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<GlobalFeed />} />
        <Route path="/login" element={<Authentification />} />
        <Route path="/register" element={<Authentification />} />
        <Route path="/articles/:slug" element={<Article />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
