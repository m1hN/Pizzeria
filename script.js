document.getElementById("btn").addEventListener("click", showOrder);

// Event Function
function showOrder() {

  let pizzaSize = document.getElementById("size").value;
  let firstTop = document.getElementById("first-topping").value;
  let secondTop = document.getElementById("second-topping").value;

  console.log(pizzaSize);
  console.log(firstTop);
  console.log(secondTop);

  // PROCESS
  let order = `Your ${pizzaSize.toLowerCase()} pizza with ${firstTop.toLowerCase()} and ${secondTop.toLowerCase()} will be ready in 20 minutes.`;
  console.log(order);

  // OUTPUT

  document.getElementById("final-output").innerHTML = order;
}
