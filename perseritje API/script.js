// var file = "txt.txt"
// fetch (file)
// .then(x => x.text())
// .then(y => document.getElementById("demo").innerHTML = y)


document.getElementById('but').addEventListener('click', function() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(x => x.json())
        .then(y => {
    
            const imageUrl = y.message;

          
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = 'Random Dog';

            const demoDiv = document.getElementById('demo');
            demoDiv.innerHTML = '';

            demoDiv.appendChild(img);
        })
        .catch(error => {
            console.error('Error fetching the image:', error);
        });
});
