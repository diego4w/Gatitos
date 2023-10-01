const res = document.getElementById('res')
const url = 'https://api.thecatapi.com/v1/images/search?api_key=live_2sPUF9KFhqoFPzq2BrutCm0ePlxfWErnHTDozBuMnblFV2J6CrqLiYyEsj08nqSc'

var arr = []
function random(){
    fetch(url)
    .then(T => T.json())
    .then(user =>{
        for(d of user){
           gerar(d)
        }
    })
}

function favoritar(id){
    arr.push({ids:id})

    localStorage.setItem('ids', JSON.stringify(arr))

    alert("Imagen favoritada 😸")
}

function gerar(d){
   res.innerHTML = `<h1>Gere gatinhos e escolha os seus Favoritos 🥰 </h1>
   <img src="${d.url}" alt="" style="width: 500px">
   <div class="btns">
                <button class="button azul" onclick=random()>Gerar gatinhos</button>
                <button class="button" onclick=favoritar('${d.id}')>Favoritar</button>
            </div>`
}

random()