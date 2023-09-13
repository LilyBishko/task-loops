// 1
let items = document.querySelectorAll('ul#list li');
items = Array.from(items);

function showModal(itemIndex) {
  if (itemIndex < items.length) {
    let currentItem;
    switch (itemIndex) {
      case 0:
        currentItem = items[0];
        break;
      case 1:
        currentItem = items[4];
        break;
      case 2:
        currentItem = items[1];
        break;
      case 3:
        currentItem = items[3];
        break;
      case 4:
        currentItem = items[2];
        break;
    }
    alert(currentItem.textContent);
    setTimeout(() => {
      showModal(itemIndex + 1);
    }, 1000);
  }
}

showModal(0);
