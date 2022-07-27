const getProducts = (callback) => {

    const request = new XMLHttpRequest(); 

    request.addEventListener('readystatechange', () => { 
        console.log(request, request.readyState);

        if(request.readyState === 4 && request.status === 200){ 
            const data = JSON.parse(request.responseText); 
            console.log(request.responseText);
            callback(undefined, data);

        } else if (request.readyState === 4){ 
            console.log('could not fetch data');
            callback('could not fetch data', undefined); 
        }
    });

    request.open('GET', 'https://api.punkapi.com/v2/beers');
    request.send(); 
};

getProducts((err, data) => {
    console.log('callback fired');
    if(err){
        console.log(err);
    } else {
        productData(data);
    }
});
