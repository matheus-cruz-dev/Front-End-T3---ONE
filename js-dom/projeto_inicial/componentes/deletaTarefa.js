const botaoDelete = () => {
  const botaoDelete = document.createElement("button")

  botaoDelete.innerText = "deletar"
  botaoDelete.addEventListener("click", deletarTarefa)

  return botaoDelete
}

const deletarTarefa = (evento) => {
  const botaoDelete = evento.target
  const tarefaCompleta = botaoDelete.parentElement

  tarefaCompleta.remove()
  return botaoDelete
}

export default botaoDelete
