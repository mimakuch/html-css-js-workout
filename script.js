console.log('Hello from Nerdbord!');

const generateRandomColor = () => {
    return `rgb(
    ${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)})`;
};

const changeBoxColor = () => {
    const box = document.querySelector('.box');
    setInterval(
        () => {
            box.style.backgroundColor = generateRandomColor()
        },
        3000
    );
};

changeBoxColor();