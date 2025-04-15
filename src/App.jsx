import "./App.css";
import { ArticleContainer } from "./components/ArticleContainer";
import { Header } from "./components/Header";
import { MainArticle } from "./components/MainArticle";
import { NewContainer } from "./components/NewContainer";

function App() {
  return (
    <main class="px-4 pt-6">
      <Header />
      <div class="lg:flex lg:gap-8">
        <MainArticle />
        <NewContainer />
      </div>
      <ArticleContainer/>
    </main>
  );
}

export default App;
