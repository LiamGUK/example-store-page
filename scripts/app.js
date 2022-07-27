const productName = document.querySelectorAll('.product-main--card__name');
const description = document.querySelectorAll('.product-main--card__text');
const productImage = document.querySelectorAll('.product-main--card__background');
const productSelector = document.querySelectorAll('.product-main--card__img');
const show = document.querySelector('.btn-show');

productSelector.forEach(prod => {
    prod.addEventListener('click', e => {
        if(e.target.classList.contains('product-main--card__img')){
            e.target.childNodes[1].classList.toggle('hidden');
            e.target.childNodes[3].classList.toggle('hidden');
        }else if(e.target.nodeName === 'IMG'){
            e.target.offsetParent.childNodes[1].classList.toggle('hidden');
            e.target.offsetParent.childNodes[3].classList.toggle('hidden');
        }
    });
});

show.addEventListener('click', e => {
    const showMore = document.querySelector('.hidden-content');
    if(e.target.nodeName === 'BUTTON'){
        showMore.style.height = '100%';
        showMore.style.transform = 'scale(1)';
        show.classList.add('hidden');
    }
});

const productData = data => {
    let i = 0;
    let z = 0;
    let b = 0;	
    productName.forEach(item => {
        item.innerHTML = `<h2>${data[i].name}</h2>`;
        i++;
    });
    description.forEach(item => {
        item.innerHTML = `<p>${data[z].description}</p>`;
        z++;
    });
    productImage.forEach(item => {
        item.innerHTML = `<img src="${data[b].image_url}">`;
        b++;
     });
};
