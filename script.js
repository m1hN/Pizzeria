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
  let order = `Thank you for ordering from <a target="_blank" href="https://www.pizza73.com/store/1/delivery">Pizza 73!</a> Your ${pizzaSize.toLowerCase()} pizza with ${firstTop.toLowerCase()} and ${secondTop.toLowerCase()} will be ready in 20 minutes.`;
  console.log(order);
  let pizzaOrder = `You have ordered a ${pizzaSize.toLowerCase()} pizza with:`;
  console.log(pizzaOrder);
  let firstTopShow = ` <ol><li>${firstTop}</li></ol>`;
  console.log(firstTopShow);
  let secondTopShow = ` <ol><li>${secondTop}</li></ol>`;
  console.log(secondTopShow);

  // OUTPUT

  document.getElementById("final-output").innerHTML = order;
  document.getElementById("final-output2").innerHTML = pizzaOrder;
  document.getElementById("top1").innerHTML = firstTopShow;
  document.getElementById("top2").innerHTML = secondTopShow;

  document.getElementById("img").innerHTML =
    '<img width="300px" id="img" src="img/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg">';
}
