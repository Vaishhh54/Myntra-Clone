let itemsContainerElement = document.querySelector('.items-container');
let bagItem;
onLoad();
function onLoad(){

    let bagItemstr = localStorage.getItem('bagItem');
    bagItem = bagItemstr ? JSON.parse(bagItemstr) : [];
    displayItemsOnHomepage();
    displyBagCount();
}

function addToBag(itemId){
    bagItem.push(itemId);
    displyBagCount();
    localStorage.setItem('bagItem',JSON.stringify(bagItem));
}
function displyBagCount(){
    let bagCountElement = document.querySelector('.bag-item-count');
    if(bagItem.length > 0){
        bagCountElement.style.visibility='visible';
        bagCountElement.innerText = bagItem.length;
    } else {
            bagCountElement.style.visibility='hidden';
    }
   
}
function displayItemsOnHomepage(){
        let innerHTML = '';
        if(!itemsContainerElement ){
            return;
        }
    items.forEach(item =>{
        innerHTML += ` 
        <div class="item-container">
        <img class="item_image" src="${item.image}" alt="${item.item_name}">
        <div class="rating">
                ${item.rating.stars} ⭐ | ${item.rating.count}
        </div> 
        <div class="company">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">${item.current_price}</span>
            <span class="original-price">${item.original_price}</span>
            <span class="discount">${item.discount_percentage}% OFF</span>
        </div>
    <button class="btn-addbag" onclick="addToBag(${item.id})">Add to Bag</button>
    </div>`
    })

    itemsContainerElement.innerHTML = innerHTML;
};
