// App.js (React component)
import React from 'react';

const App = () => {
    return (
        <div className="container">
            <header>
                <h1>Geek Roundtable Podcast</h1>
                <p>Where tech, politics, culture, hobbies, and family intersect.</p>
            </header>
            <section className="topics">
                <div className="topic">
                    <img src="microchip-icon.png" alt="Tech" />
                    <h2>Technology</h2>
                    <p>Stay updated on the latest gadgets and innovations.</p>
                </div>
                {/* Repeat similar sections for other topics */}
            </section>
            <footer>
                <p>© 2023 Geek Roundtable Podcast</p>
            </footer>
        </div>
    );
};

export default App;
