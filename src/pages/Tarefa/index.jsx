import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deletarTarefa } from '../../store/modules/tarefas/actions'

import { Principal, Topo, TextoTodo, Todo,Titulo,Conteudo, BotaoDeletar,BotaoEditar, TextoBotao } from './styles'

export function Tarefa({ route }) {
  const { tarefa } = route.params

  const dispatch = useDispatch()
  const navigation = useNavigation()

  function remover() {
    dispatch(deletarTarefa(tarefa.id))
    navigation.goBack()
  }

  return (
    <Principal>
      <Topo>
        <TextoTodo>Aplicativo ToDo list</TextoTodo>
      </Topo>
      
      <Todo>
        <Titulo>Tarefa#{tarefa.titulo}</Titulo>
        <Conteudo>{tarefa.conteudo}</Conteudo>
      </Todo>

      <BotaoEditar><TextoBotao>EDITAR TAREFA</TextoBotao></BotaoEditar>
      <BotaoDeletar onPress={remover}><TextoBotao>REMOVER TAREFA</TextoBotao></BotaoDeletar>
    </Principal>
  )
}