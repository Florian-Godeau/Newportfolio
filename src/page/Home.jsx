import React from 'react';
import { Navigate } from 'react-router-dom';
import Header from "../components/Header";
import BottomContainer from "../components/BottomContainer";
import { Route, Routes } from 'react-router-dom';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

function Home() {
    return (
        <>
            <Header />
            <Routes>
            <Route path="/" element={<Navigate to="/about" />} />
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
                <Route path="/projects" element={
                    <BottomContainer>
                        <Projects />
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

