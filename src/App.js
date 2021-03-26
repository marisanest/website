import React from 'react';

const images = [
    {
        id: 1,
        src: './1.png'
    },
    {
        id: 2,
        src: './2.png'
    }
]

function App() {

    return (
        <div>
            <h1>List of Courses</h1>
            <hr />
            {
                images.map(function(image) {
                    // return <div>Bla</div>
                    // console.log(image.src)
                    // let src = require(image.src);
                    return <img alt='#' src={image.src} />;
                })
            }
        </div>
    );
}
export default App;