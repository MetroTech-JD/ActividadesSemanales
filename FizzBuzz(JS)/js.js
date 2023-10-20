const Document = document.querySelector('h1');

for(i=0;i<100;i++){
    const nuevo = document.createElement('p')
    if (i%3==0) {
        nuevo.textContent = "Fizz" + " " + i;
    } else if (i%5==0) {
        nuevo.textContent = "Buzz" + " " + i;
    }
    else if (i%3==0 && i%5==0) {
        nuevo.textContent = "FizzBuzz" + " " + i;
    }
    
    Document.appendChild(nuevo)
} 


