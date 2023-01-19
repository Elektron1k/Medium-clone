import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalFeed from 'pages/globalFeed';
import Article from 'pages/article';
import TopBar from 'components/topBar';

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<GlobalFeed />} />
        <Route path="/articles/:slug" element={<Article />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
