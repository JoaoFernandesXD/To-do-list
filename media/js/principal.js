const checkboxs = document.querySelectorAll('.input');
const texto = document.querySelectorAll('.list__task p');


// buscar tasks
const buscarTarefas = async () => {
    const res = await fetch('http://localhost:4000/tasks');
    const tarefas = await res.json();
    return tarefas;
}

const mostrarTrefas = (tarefas) => {
    const container = document.getElementById('olamundo');
    container.innerHTML += `<div class="list__task">`;
    container.innerHTML += `<input type="checkbox" class="input" />`;
    container.innerHTML += `<p>Criar um to do list com node js e html e css</p>`;
    container.innerHTML += `<div class="button">`;
    container.innerHTML += `<button class="action">`;
    container.innerHTML += `<img src="./media/img/note.png" />`;
    container.innerHTML += `<span>Editar</span>`;
    container.innerHTML += `</button>`;
    container.innerHTML += `<button class="action">`;
    container.innerHTML += `<img src="./media/img/trash.png" alt="" />`;
    container.innerHTML +=  `<span>Excluir</span>`;
    container.innerHTML +=  `</button>`;
    container.innerHTML += `</div>`;
    container.innerHTML += `</div>`;
}

