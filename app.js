let listaAmigos = [];

function adicionarAmigo() {
  let amigos = document.getElementById('amigo').value;
  if (amigos == '') {
    alert("Por favor, insira um nome!");
  } else {
    listaAmigos.push(amigos);
    console.log(listaAmigos);
    limparCampo();
    exibirLista();
  }
}

function exibirLista() {
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';

  for (let i = 0; i < listaAmigos.length; i++) {
    let item = document.createElement('li'); 
    item.textContent = listaAmigos[i];     
    lista.appendChild(item);                
  }
}

function limparCampo() {
  let amigo = document.getElementById('amigo');
  amigo.value = '';
}

function sortearAmigo(){

    if(listaAmigos === 0){

      alert("lista vazia");
      return;

    }else{

     let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);

     let amigoSorteado = listaAmigos[indiceAleatorio];
     document.getElementById('resultado').innerHTML = `Amigo sorteado ${amigoSorteado}`;
   

    }



}

