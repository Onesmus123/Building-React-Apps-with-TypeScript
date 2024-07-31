import React from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import { Header, Footer } from './components/HeaderFooter';
import './styles.css';

const App: React.FC = () => (
    <>
        <Header />
        <main className="container">
            <Greeting name="World" />
            <Counter />
        </main>
        <Footer />
    </>
);

export default App;
