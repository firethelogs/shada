import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CountdownTimer from './components/CountdownTimer';
import Newsletter from './components/Newsletter';

function App() {
  // Set launch date to 30 days from now
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);

  const handleNewsletterSubmit = (email: string) => {
    console.log('Newsletter signup:', email);
    // Here you would typically handle the email submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100">
      <Header />
      <main className="pt-32 pb-16 px-4">
        <Hero 
          title="Elegance Awaits" 
          subtitle="SHADA WEAR is crafting a new standard in women's fashion. Join us on our journey to redefine contemporary elegance."
        />
        <CountdownTimer targetDate={launchDate} />
        <Newsletter onSubmit={handleNewsletterSubmit} />
      </main>
    </div>
  );
}

export default App