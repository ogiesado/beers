import { BeerList } from './beer-list';
import { Header } from './common';

function App() {
  return (
    <div className="container mx-auto p-4 sm:p-0">
      <Header />
      <BeerList />
    </div>
  );
}

export default App;
