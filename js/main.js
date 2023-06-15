function filter(type) {
    let all = document.querySelectorAll(".producti div[type]");
    let cards = document.querySelectorAll(".producti .card");


    // прячем все элементы
    all.forEach(element => {
        element.style.display = "none";
    });

    cards.forEach(element => {
        element.style.opacity = 1;
        element.style.transform = 'translateY(0px)';

    });

    // если тип all - показывем все
    if (type == "all") {
        let elements = document.querySelectorAll(".producti div");
        elements.forEach(element => {
            element.style.display = "block";
        });
    }
    // если тип moloko - показываем все элементы с атрибутом type=moloko
    else if (type == "moloko") {
        let elements = document.querySelectorAll(".producti div[type='moloko']");
        elements.forEach(element => {
            element.style.display = "block";
        });
    }
    // если тип kefir - показываем все элементы с атрибутом type=kefir
    else if (type == "kefir") {
        let elements = document.querySelectorAll(".producti div[type='kefir']");
        elements.forEach(element => {
            element.style.display = "block";
        });
    }
    else if (type == "smetana") {
        let elements = document.querySelectorAll(".producti div[type='smetana']");
        elements.forEach(element => {
            element.style.display = "block";
        });
    }
    else if (type == "iogurt") {
        let elements = document.querySelectorAll(".producti div[type='iogurt']");
        elements.forEach(element => {
            element.style.display = "block";
        });
    }
    else if (type == "tvorog") {
        let elements = document.querySelectorAll(".producti div[type='tvorog']");
        elements.forEach(element => {
            element.style.display = "block";
        });
    }
    else if (type == "sir") {
        let elements = document.querySelectorAll(".producti div[type='sir']");
        elements.forEach(element => {
            element.style.display = "block";
        });
    }
    else if (type == "maslo") {
        let elements = document.querySelectorAll(".producti div[type='maslo']");
        elements.forEach(element => {
            element.style.display = "block";
        });
    }

}