const form = document.getElementById("form");
const totalPriceDisplay = document.getElementById("totalPrice");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const price = parseFloat(e.target.price.value);
    const item = e.target.item.value;
    const category = e.target.category.value;
    const order = { price: price, item: item, category: category };

    axios.post("https://crudcrud.com/api/27adb51996aa46e985c07b8ae1474f38/orders", order)
        .then((response) => {
            addToList(response.data);
            updateTotalPrice();
        })
        .catch((err) => {
            console.log(err);
        });

});

document.addEventListener("DOMContentLoaded", () => {

    axios.get("https://crudcrud.com/api/27adb51996aa46e985c07b8ae1474f38/orders")
        .then((response) => {
            for (var i = 0; i < response.data.length; i++) {
                showOrders(response.data[i]);
            }
            updateTotalPrice();
        })
        .catch((err) => {
            console.log(err);
        })
});

function addToList(order) {
    showOrders(order);
}

function showOrders(order) {
    const itemList = order.category + "";
    const listId = `${itemList.toLowerCase().replace(" ", "")}`;
    let parentNode = document.getElementById(listId);
    if (!parentNode) {
        parentNode = createItemList(listId);
    }
    const childHTML = `<li id=${order._id}>${order.item} - ${order.price}
                        <button onclick="handleDelete('${order._id}')" class="btn-del">Delete</button>
                      </li>`;
    parentNode.innerHTML += childHTML;
}

function createItemList(listId) {
    let container = document.getElementById("orders");
    if (!container) {
        container = document.createElement("div");
        container.id = "orders";
        document.body.appendChild(container);
    }
    const parentNode = document.createElement("ul");
    parentNode.id = listId;
    container.appendChild(parentNode);
    return parentNode;
}

async function handleDelete(id) {
    try {
      await axios.delete(`https://crudcrud.com/api/27adb51996aa46e985c07b8ae1474f38/orders/${id}`);
      const parentNode = document.getElementById(id);
      parentNode.remove();
      updateTotalPrice();
    } catch (error) {
      console.log(error);
    }
  }
  

function updateTotalPrice() {
    console.log(total)
    let total = 0;
    const orders = document.querySelectorAll("#orders ul li");
    orders.forEach(order => {
        total += parseFloat(order.textContent.split(" - ")[1]);
    });
    totalPriceDisplay.textContent = total.toFixed(2);
}



