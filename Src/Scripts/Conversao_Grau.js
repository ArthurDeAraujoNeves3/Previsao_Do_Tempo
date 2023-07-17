let cont = 1;

function Conversao_Celsius(){

    let Btn_Celsius = document.getElementById('celsius'); //Botao para mostrar temperatura em celsius
    let Btn_Farenheit = document.getElementById('farenheit'); //Botao para mostrar temperatura em farenheit

    let Temperatura_HTML = document.getElementById("Grauss");
    let Temperatura = document.getElementById("Grauss").innerHTML;
    Temperatura = parseFloat(Temperatura);

    let Sensacao_Termica_HTML = document.getElementById("Sensacao_termica");
    let Sensacao_Termica = document.getElementById("Sensacao_termica").innerHTML;
    Sensacao_Termica = parseFloat(Sensacao_Termica);

    //Farenheit para celsius
    if(cont == 0){

        Btn_Celsius.style.color = '#575757'; //Botao ativo
        Btn_Farenheit.style.color = '#C0C0C0'; //Botao desligado

        Temperatura = ((Temperatura - 32) / 1.8).toFixed(2);
        Temperatura_HTML.innerHTML = `${Temperatura}`; //Inserindo valor no html

        Sensacao_Termica = ((Sensacao_Termica - 32) / 1.8).toFixed(2);
        Sensacao_Termica_HTML.innerHTML = `${Sensacao_Termica}°C`; //Inserindo valor no html

        let Celsius_Farenheit = document.getElementsByClassName("Btns_celsius_farenheit");
        Celsius_Farenheit.id = "celsius";
        
        cont++;
    } 
}

function Conversao_Farenheit(){

    let Btn_Celsius = document.getElementById('celsius'); //Botao para mostrar temperatura em celsius
    let Btn_Farenheit = document.getElementById('farenheit'); //Botao para mostrar temperatura em farenheit

    let Temperatura_HTML = document.getElementById("Grauss");
    let Temperatura = document.getElementById("Grauss").innerHTML;
    Temperatura = parseFloat(Temperatura);

    let Sensacao_Termica_HTML = document.getElementById("Sensacao_termica");
    let Sensacao_Termica = document.getElementById("Sensacao_termica").innerHTML;
    Sensacao_Termica = parseFloat(Sensacao_Termica);

    //Celsius para farenheit
    if(cont == 1){

        Btn_Celsius.style.color = '#C0C0C0'; //Botao desligado
        Btn_Farenheit.style.color = '#575757'; //Botao ativo

        Temperatura = ((Temperatura * 1.8) + 32).toFixed(2);
        Temperatura_HTML.innerText = `${Temperatura}`; //Inserindo valor no html

        Sensacao_Termica = ((Sensacao_Termica * 1.8) + 32).toFixed(2);
        Sensacao_Termica_HTML.innerText = `${Sensacao_Termica}°F`; //Inserindo valor no html

        let Celsius_Farenheit = document.getElementsByClassName("Btns_celsius_farenheit");
        Celsius_Farenheit.id = "farenheit";
        
        cont--;
    }
}
