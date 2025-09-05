import { Header, Hero, BackgroundElements, Wings } from './components';

export const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <BackgroundElements />
      <main className="flex items-center justify-center flex-1 relative overflow-hidden">
        <Hero />
        <Wings />
      </main>
    </div>
  );
};
