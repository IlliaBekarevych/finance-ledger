import About from './About/About';
import Blog from './Blog/Blog';
import Cases from './Cases/Cases';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Team from './Team/Team';

export const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Cases />
      <Blog />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};
