const key = "d4e77800aa032055b22a78723c92f638"; //Chave gerada pelo site
let Texto_Aviso = document.getElementById("Avisoo");

//Pegando nome da cidade
function nome_da_cidade(){

    let Cidade = document.getElementById("Barra_pesquisaa").value; //Pegando o nome da cidade

    Buscar_Dados(Cidade);
}

//Usamos funcoes assincronas para precisamos nos comunicar com servidores
async function Buscar_Dados(Cidade){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json() ); //Essa linha de codigo ira esperar ate o servidor responder

    /*console.log(dados);*/

    Dados_Na_Tela(Cidade, dados);
    Fundo_Site(dados);

    Icone_Tempo(dados);
}

/*Icone do tempo*/
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
}

//Trocar cor de fundo do site
function Fundo_Site(dados){

    let body = document.getElementById("body");

    //Se a cidade estiver nublada, a cor de fundo do site ira mudar
    if(dados.weather[0].description == "nublado" || dados.weather[0].description == "chuva forte" || dados.weather[0].description == "chuviscos com intensidade de raios"){

        body.style.backgroundImage = "linear-gradient(#777777, #262626)";
    }
    else{

        body.style.backgroundImage = "linear-gradient(#06C3FF, #4E71EB)";
    }

}

//Atualizando HTML
function Dados_Na_Tela(Cidade, dados){

    //Nome da cidade
    let Nome_Cidade_HTML = document.getElementById("Nome_Cidadee");
    Nome_Cidade_HTML.innerHTML = dados.name;

    //Descricao sobre o ceu da cidade
    let Descricao = document.getElementById("Ceuu");
    Descricao.innerHTML = dados.weather[0].description;

    //Temperatura
    let Temperatura = document.getElementById("Grauss");
    Temperatura.innerHTML = dados.main.temp_max;

    //Sensacao termica
    let Sensacao_Termica = document.getElementById("Sensacao_termica");
    Sensacao_Termica.innerHTML = `${dados.main.feels_like.toFixed(2)}°C`;

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


const Capital = "Brasilia"; //Cidade padrao para o site

//Assim que o site abrir, ira ter brasilia com os dados do atuais
async function Cidade_Padrao(){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Capital}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json() ); //Essa linha de codigo ira esperar ate o servidor responder

    Dados_Na_Tela(Capital, dados)
}

Cidade_Padrao();
