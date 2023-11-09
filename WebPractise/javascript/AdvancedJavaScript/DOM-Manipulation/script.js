function addItem() {
    const itemInput = document.getElementById('itemInput'); //Buy Groceries
    const itemText = itemInput.value.trim();
    
    if (!itemText) return;
    
    const itemList = document.getElementById('itemlist'); 
    const newItem = document.createElement('li'); //<li> </li>
    newItem.textContent = itemText; //<li>Buy Groceries</li>
    
    newItem.addEventListener('click', function() {
        const newText = prompt('Edit item:', newItem.textContent);
        if (newText !== null) newItem.textContent = newText;
    });
    
    newItem.addEventListener('dblclick', function() {
        const confirmed = confirm('Are you sure you want to delete this item?');
        if (confirmed) itemList.removeChild(newItem);
    });

    itemList.appendChild(newItem);
    itemInput.value = "";
}