import { Header, Hero, BackgroundElements, Wings } from './components';

export const App = () => {
  return (
    <>
      <Header />
      <BackgroundElements />
      <main className="flex items-center justify-center flex-1 relative overflow-hidden">
        <Hero />
        <Wings />
      </main>
    </>
  );
};
