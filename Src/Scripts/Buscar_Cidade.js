const key = "d4e77800aa032055b22a78723c92f638"; //Chave gerada pelo site da API

//Buscando nome da cidade
function nome_da_cidade(){

    let Cidade = document.getElementById("Barra_pesquisaa").value;

    Buscar_Dados(Cidade);
}

//Usamos funcoes assincronas para comunicacao com os servidores
async function Buscar_Dados(Cidade){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json() ); //Essa linha de codigo ira esperar ate o servidor responder

    /*console.log(dados);*/

    Dados_Na_Tela(Cidade, dados);
    Fundo_Site(dados);
    Icone_Tempo(dados);
}

/*Troca o icone do tempo dependendo de como ele esta*/
function Icone_Tempo(dados){

    if(dados.weather[0].description == "nublado" || dados.weather[0].description == "algumas nuvens"){

        document.getElementById("Icon_ceuu").src = "./Src/Image/Icons/nublado.png";
    }
    else if(dados.weather[0].description == "céu limpo"){

        document.getElementById("Icon_ceuu").src = "./Src/Image/Icons/Ceu limpo.png";
    }
    else if(dados.weather[0].description == "nuvens dispersas"){

        document.getElementById("Icon_ceuu").src = "./Src/Image/Icons/Nuvens dispersas.png";
    }
    else if(dados.weather[0].description == "chuviscos com intensidade de raios"){

        document.getElementById("Icon_ceuu").src = "./Src/Image/Icons/trovao.png";
    }
    else if(dados.weather[0].description == "chuva leve"){

        document.getElementById("Icon_ceuu").src = "./Src/Image/Icons/chuva.png";
    }
}

//Trocar cor de fundo do site
function Fundo_Site(dados){

    let body = document.getElementById("body");

    //Se a cidade estiver nublada, a cor de fundo do site ira mudar
    if(dados.weather[0].description == "nublado" || dados.weather[0].description == "chuva forte" || dados.weather[0].description == "chuviscos com intensidade de raios" || dados.weather[0].description == "chuva leve" || dados.weather[0].description == "neblina"){

        body.style.backgroundPositionY = "-3000px";
    }
    /*Dia, ceu limpo*/
    else{

        body.style.backgroundPositionY = "0px";
    }

}

//Atualizando dados no HTML
function Dados_Na_Tela(Cidade, dados){

    //Nome da cidade
    let Nome_Cidade_HTML = document.getElementById("Nome_Cidadee");
    Nome_Cidade_HTML.innerHTML = dados.name;

    /*Caso a cidade nao exista ou digitem errado*/
    if(Nome_Cidade_HTML.innerHTML == "undefined"){

        Nome_Cidade_HTML.innerHTML = "Cidade não encontrada";
    }

    //Descricao sobre o ceu da cidade
    let Descricao = document.getElementById("Ceuu");
    Descricao.innerHTML = dados.weather[0].description;

    let Celsius_Farenheit = document.getElementsByClassName("Btns_celsius_farenheit");

    /*
    Se o usuario quiser apenas em farenheit, o programa automaticamente converter de celsius para farenheit,
    assim fica mais pratico para o usuario.
    */

    //Temperatura
    if(Celsius_Farenheit.id == "farenheit"){

        var temp = dados.main.temp;

        temp = ((temp * 1.8) + 32).toFixed(2);

        let Temperatura = document.getElementById("Grauss");
        Temperatura.innerHTML = temp;
    }
    else{

        let Temperatura = document.getElementById("Grauss");
        Temperatura.innerHTML = dados.main.temp;
    }

    //Sensacao termica
    if(Celsius_Farenheit.id == "farenheit"){

        var sen_term = dados.main.feels_like;

        sen_term = ((sen_term * 1.8) + 32).toFixed(2);

        let Sensacao_Termica = document.getElementById("Sensacao_termica");
        Sensacao_Termica.innerHTML = `${sen_term}°F`;
    }
    else{

        let Sensacao_Termica = document.getElementById("Sensacao_termica");
        Sensacao_Termica.innerHTML = `${dados.main.feels_like.toFixed(2)}°C`;
    }

    //Umidae
    let Umidade = document.getElementById("umidade");
    Umidade.innerHTML = `${dados.main.humidity}%`;

    //Pressao
    let Pressao = document.getElementById("pressao");
    Pressao.innerHTML = `${dados.main.pressure}mbar`;

    let Velocidade_Vento = document.getElementById("velocidade_vento");
    Velocidade_Vento.innerHTML = `${dados.wind.speed} km/h`;
}


//=================================
//=================================
//=================================
//=================================

//Assim que o site abrir, ira ter brasilia com os dados do atuais. A cidade padrao do site

const Capital = "Brasilia"; //Cidade padrao para o site

async function Cidade_Padrao(){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Capital}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json() ); //Essa linha de codigo ira esperar ate o servidor responder

    Dados_Na_Tela(Capital, dados)
    Icone_Tempo(dados);
    Fundo_Site(dados);
}

Cidade_Padrao();
