function addNewExpense(e) {
    e.preventDefault();

    const expenseDetails = {
        expenseamount: e.target.expenseamount.value,
        description: e.target.description.value,
        category: e.target.category.value,
        orderId: e.target.orderId.value
    };

    axios.post('https://crudcrud.com/api/a7fae6d7b35d4dfe9eff65b4d1dca482/orders', expenseDetails)
        .then((response) => {
            // Store expenseDetails in localStorage
            storeExpenseInLocalStorage(expenseDetails);

            addNewExpensetoUI(expenseDetails);
        })
        .catch(err => showError(err));
}

window.addEventListener('DOMContentLoaded', () => {
    axios.get('https://crudcrud.com/api/a7fae6d7b35d4dfe9eff65b4d1dca482/orders')
        .then(response => {
            response.data.expenses.forEach(expense => {
                addNewExpensetoUI(expense);
            });
        })
        .catch(err => showError(err));

    // Retrieve data from localStorage and add to UI
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const expense = JSON.parse(localStorage.getItem(key));
        addNewExpensetoUI(expense);
    }
});

function addNewExpensetoUI(expense) {
    const parentElement = document.getElementById(expense.category);
    const expenseElemId = `expense-${expense.orderId}_${expense.category}`; // Updated ID
    parentElement.innerHTML += `
        <li id=${expenseElemId}>
            ${expense.expenseamount} - ${expense.category} - ${expense.description}
            <button onclick='deleteExpense(event, "${expense.orderId}_${expense.category}")'> <!-- Updated ID -->
                Delete Product
            </button>
        </li>`;
}


function deleteExpense(e, expenseid) {
    console.log("Deleting:", expenseid);
    removeExpensefromUI(expenseid);
    
    // Check if the item exists in localStorage with the given ID
    const existingData = localStorage.getItem(expenseid);
    console.log("Existing Data:", existingData);
    if (existingData) {
        // If item with the given ID exists, remove it from localStorage
        localStorage.removeItem(expenseid);
    } else {
        // If item with the given ID doesn't exist, check for an item with the same order ID but different category
        const parts = expenseid.split('_');
        console.log("Parts:", parts);
        if (parts.length > 1) {
            const orderId = parts[0];
            const category = parts.slice(1).join('_');
            console.log("Deleting by Order ID and Category:", orderId, category);
            localStorage.removeItem(`${orderId}_${category}`);
        }
    }
}




function removeExpensefromUI(expenseid) {
    const expenseElemId = `expense-${expenseid}`;
    document.getElementById(expenseElemId).remove();
}

function showError(error) {
    console.error("An error occurred:", error);
}

function storeExpenseInLocalStorage(expenseDetails) {
    const expenseKey = `${expenseDetails.orderId}_${expenseDetails.category}`;
    localStorage.setItem(expenseKey, JSON.stringify(expenseDetails));
}
