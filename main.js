const boton = document.getElementById("btn-submit");
boton.addEventListener("click", (event)=>{
    event.preventDefault();
    getPosts();
});

const postDiv = document.getElementById("post-data");
const nuevaUl = document.createElement('ul');
postDiv.appendChild(nuevaUl);

const fetchData = async()=>{
    try{
        const apiResponse = await fetch ("https://jsonplaceholder.typicode.com/posts");
        const jsondata = await apiResponse.json();
        return jsondata;
    } catch (error){
        console.error("error en la data", error);
    }
}

const getPosts = async () => {
    const data = await fetchData();    

    if (data.length >= 4) {
        data.slice(0, 4).forEach(item => {
            console.log(`<li><strong>${item.title}</strong> <br> ${item.body}</li>`);
            
            const nuevaLi = document.createElement('li');
            nuevaLi.innerHTML = `<strong>${item.title}</strong> <br> ${item.body}`;
            nuevaUl.appendChild(nuevaLi);
            
        });
    } else {
        console.log("No se encuentran suficientes datos");
    }
}



//Preguntas: cómo agrego el addevent listener si ya está en el html; y cómo hago para que se escriban los 4 primeros items en el html.
