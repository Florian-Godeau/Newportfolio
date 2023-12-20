import React from 'react';
import Header from "../components/Header";
import BottomContainer from "../components/BottomContainer";
import { Route, Routes } from 'react-router-dom';
import About from '../components/About';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

function Home() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={
                    <BottomContainer>
                        {/* Ici, vous pouvez mettre un contenu par défaut si nécessaire */}
                    </BottomContainer>
                } />
                <Route path="/about" element={
                    <BottomContainer>
                        <About />
                    </BottomContainer>
                } />
                <Route path="/skills" element={
                    <BottomContainer>
                        <Skills />
                    </BottomContainer>
                } />
                <Route path="/contact" element={
                    <BottomContainer>
                        <Contact />
                    </BottomContainer>
                } />
            </Routes>
        </>
    );
}

export default Home;

