function poiskProdukta() {
    const array = ["молоко", "кефир", "ряженка", "йогурт", "сметана", "творог", "брынза", "сыр", "масло"];
    const even = (element) => element === document.getElementById("poisk").value.toLowerCase();
    //если не находит товар из списка то выводит сообщение для пользователя
    if(!array.some(even)){
        alert("У нас нет такого товара!"); 
    //а если есть тот товар в списке, то браузер переводит пользователя на компоненту с товарами     
    } else {
        document.getElementById("ourProducts").scrollIntoView();
    }
}
