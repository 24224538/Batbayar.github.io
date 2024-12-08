const images = [
    'url("images/dota3.jpg")',
    'url("images/dota23.jpg")',
    'url("images/dota22.png")'
    
];

const defaultImage = 'url("images/ho5WPcQ.png")';

let currentIndex = -1;

        function changeBackground() {
            
            currentIndex++;

            if (currentIndex >= images.length) {
                
                document.getElementById('page').style.backgroundImage = defaultImage;
                currentIndex = -1;  
            } else {
                
                document.getElementById('page').style.backgroundImage = images[currentIndex];
            }
        }
        