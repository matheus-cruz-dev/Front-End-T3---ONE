import botaoConclui from "./componentes/concluiTarefa.js"
import botaoDelete from "./componentes/deletaTarefa.js"

const criarTarefa = (evento) => {
  evento.preventDefault()

  const lista = document.querySelector("[data-list]")
  const input = document.querySelector("[data-form-input]")
  const valor = input.value

  const tarefa = document.createElement("li")
  tarefa.classList.add("task")

  const conteudo = `<p class="content">${valor}</p>`

  tarefa.innerHTML = conteudo

  tarefa.appendChild(botaoConclui())
  tarefa.appendChild(botaoDelete())
  lista.appendChild(tarefa)
  input.value = " "
}

const novaTarefa = document.querySelector("[data-form-button]")

novaTarefa.addEventListener("click", criarTarefa)