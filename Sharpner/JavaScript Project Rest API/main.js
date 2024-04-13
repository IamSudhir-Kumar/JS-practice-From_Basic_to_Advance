// Function to handle adding a new expense
function addNewExpense(e) {
    // Prevent form submission
    e.preventDefault();
  
    // Get expense details from the form
    const expenseDetails = {
      expenseamount: e.target.expenseamount.value,
      description: e.target.description.value,
      category: e.target.category.value,
      orderId: e.target.orderId.value,
    };
  
    // Send expense details to the server
    axios.post("https://crudcrud.com/api/a7fae6d7b35d4dfe9eff65b4d1dca482/orders", expenseDetails)
      .then((response) => {
        // Store expense details in localStorage
        storeExpenseInLocalStorage(expenseDetails);
  
        // Add the new expense to the UI
        addNewExpensetoUI(expenseDetails);
      })
      .catch((err) => showError(err));
  }
  
  // Function to load expenses when the page loads
  window.addEventListener("DOMContentLoaded", () => {
    // Fetch expenses from the server
    axios.get("https://crudcrud.com/api/a7fae6d7b35d4dfe9eff65b4d1dca482/orders")
      .then((response) => {
        // Add each expense to the UI
        response.data.expenses.forEach((expense) => {
          addNewExpensetoUI(expense);
        });
      })
      .catch((err) => showError(err));
  
    // Load expenses from localStorage and add them to the UI
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const expense = JSON.parse(localStorage.getItem(key));
      addNewExpensetoUI(expense);
    }
  });
  
  // Function to add a new expense to the UI
  function addNewExpensetoUI(expense) {
    // Find the parent element based on the expense category
    const parentElement = document.getElementById(expense.category);
  
    // Generate a unique ID for the expense element
    const expenseElemId = `expense-${expense.orderId}_${expense.category}`;
  
    // Create HTML for the expense element
    parentElement.innerHTML += `
      <li id=${expenseElemId}>
        ${expense.expenseamount} - ${expense.category} - ${expense.description}
        <button onclick='deleteExpense(event, "${expense.orderId}_${expense.category}")'>
          Delete Product
        </button>
      </li>`;
  }
  
  // Function to handle deleting an expense
  function deleteExpense(e, expenseid) {
    // Remove the expense element from the UI
    removeExpensefromUI(expenseid);
  
    // Check if the expense exists in localStorage
    const existingData = localStorage.getItem(expenseid);
    if (existingData) {
      // If the expense exists, remove it from localStorage
      localStorage.removeItem(expenseid);
    } else {
      // If the expense doesn't exist, check for an item with the same order ID but different category
      const parts = expenseid.split("_");
      if (parts.length > 1) {
        const orderId = parts[0];
        const category = parts.slice(1).join("_");
        localStorage.removeItem(`${orderId}_${category}`);
      }
    }
  }
  
  // Function to remove an expense element from the UI
  function removeExpensefromUI(expenseid) {
    const expenseElemId = `expense-${expenseid}`;
    document.getElementById(expenseElemId).remove();
  }
  
  // Function to show error messages
  function showError(error) {
    console.error("An error occurred:", error);
  }
  
  // Function to store expense details in localStorage
  function storeExpenseInLocalStorage(expenseDetails) {
    const expenseKey = `${expenseDetails.orderId}_${expenseDetails.category}`;
    localStorage.setItem(expenseKey, JSON.stringify(expenseDetails));
  }
  