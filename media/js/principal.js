const checkboxs = document.querySelectorAll('.input');
const texto = document.querySelectorAll('.list__task p');


// buscar tasks
const buscarTarefas = async () => {
    const res = await fetch('http://localhost:4000/tasks');
    const tarefas = await res.json();
    return tarefas;
}

const salvarTarefa = (tarefa) => {
        return fetch("http://localhost:4000/tasks/insert", {
            method: "POST",
            body: JSON.stringify({
                title: tarefa,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
}

const submitTarefa = () => {
    const form = document.querySelector('#novaTarefaForm')

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const input = event.target[0]
        const novaTarefa = input.value
        //TODO: Adicionar loading

        try {
            await salvarTarefa(novaTarefa)
            input.value = ''

            //TODO: Atualizar lista de tarefas
        } catch(err) {
            console.error(err)
            //TODO: Exibir erro ao usuário
        } finally {
            //TODO: Remover loading
        }
    })
}

submitTarefa()

// Modal controller
var modal = document.getElementById("modal")

var btn = document.getElementsByClassName("edit")

var span = document.getElementsByClassName("close")[0]

console.log(btn)


btn[0].onclick = () => {
    modal.style.display = "block"
}

btn[1].onclick = () => {
    modal.style.display = "block"
}

btn[2].onclick = () => {
    modal.style.display = "block"
}

btn[3].onclick = () => {
    modal.style.display = "block"
}

btn[4].onclick = () => {
    modal.style.display = "block"
}

span.onclick = () => {
    modal.style.display = "none"
}

window.onclick = (event) => {
    if(event.target == modal) {
        modal.style.display = "none"
    }
}