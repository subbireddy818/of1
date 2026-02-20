import React from "react";
import "./App.css";
import { Toaster } from 'sonner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Classes } from './components/Classes';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { RegistrationPopup } from './components/RegistrationPopup';
import { Newsletter } from './components/Newsletter';
import { Partnerships } from './components/Partnerships';
import { SocialVideos } from './components/SocialVideos';

function App() {
    return (
        <div className="App">
            <RegistrationPopup />
            <Header />

            <main>
                <Hero />
                <Classes />
                <WhyChooseUs />
                <Newsletter />
                <Partnerships />
                <Testimonials />
                <Gallery />
                <SocialVideos />
                <ContactForm />
            </main>

            <Footer />
            <Toaster position="top-right" richColors />
        </div>
    );
}

export default App;
