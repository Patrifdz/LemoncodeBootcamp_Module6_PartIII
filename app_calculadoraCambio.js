// PASO 1 -> Creo el array con las monedas y el stock de cada una. 
var cash = [
    {type: 200, stock: 1},
    {type: 100, stock: 2},
    {type: 50, stock: 3},
    {type: 20, stock: 1},
    {type: 10, stock: 3},
    {type: 5, stock: 4},
    {type: 2, stock: 3},
    {type: 1, stock: 2},
    {type: 0.50, stock: 2},
    {type: 0.20, stock: 10},
    {type: 0.10, stock: 7},
    {type: 0.05, stock: 6},
    {type: 0.02, stock: 8},
    {type: 0.01, stock: 12},
]
// PASO 2 -> Creo las funciones para capturar el valor de los inputs del html con el precio y el dinero entregado por el cliente.
var totalPrice = () => document.getElementById("price").value;
var moneyClient = () => document.getElementById("delivery").value;

// PASO 3 -> Creo la función para calcular cuánto dinero he de devolver. Los parámetros son "price" = precio del producto y "delivery" = dinero entregado por el cliente. Si "delivery-price" es mayor que cero, devuelve la cantidad que será nuestro cambio a devolver. Si es menor que cero, informará al cliente de que le falta dinero por entregar. 
var getReturn = (price, delivery) => {
    var returnMoney = delivery - price;
    if (returnMoney > 0) {
        return returnMoney;
    } else {
        return alert(`Faltan ${returnMoney * -1} euros por entregar`);
    }
};

// PASO 4 -> Creo la función para saber cuantas unidades de cada moneda hay que devolver. Creo la variable "number" y llamo a la función con los parámetros de los inputs del html para saber cual es la cantidad de devolver. Creo otra variable con un array vacío para ir añadiendo las monedas a devolver. Hago un bucle para recorrer todas las monedas, y a su vez otro bucle anidado que inicie con la cantidad a devolver entre cada moneda. Mientras sea mayor/igual a 1 y haya stock mayor a 0, añadirá esa moneda al array vacío. Cuando sea menor que 1, pasará a la siguiente moneda. En cada iteración hay que restar a "number" (cantidad a devolver) la moneda que vaya a añadirse al array, para que inicie con la nueva cantidad restante en la siguiente iteración, y restar la moneda al stock. 
function getCoinsToReturn () {
        var number = getReturn(totalPrice(), moneyClient());
        var coinsReturn = [];
        for (coin of cash) {
            for (var i = number.toFixed(2)/coin.type; i>=1 && coin.stock>0; i--) {
                    coinsReturn.push(coin.type);
                    number = number - coin.type;
                    coin.stock--;
            }
        } 
        return coinsReturn;
    };

// PASO 5 -> Hago el addEventListener para que, al hacer click en el botón "Calcular", obtenga el elemento con el id "lista" creado en el html y hago un bucle en el que, por cada moneda que calcule a devolver la función "getCoinsToReturn", cree un elemento de esa lista donde muestre la moneda en el html. 
document.getElementById("button").addEventListener("click", () => {
    var lista = document.getElementById("lista");
    lista.textContent= "Billetes/monedas a devolver:";
    for(item of getCoinsToReturn()) {
        var elementoLista = document.createElement("li");
        elementoLista.setAttribute("class", "coin");
        var contenido = document.createTextNode(`${item} €`);
        lista.appendChild(elementoLista);
        elementoLista.appendChild(contenido);
    }
});