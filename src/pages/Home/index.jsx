import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Tarefa } from '../../components/Tarefa'
import { adicionarTarefa } from '../../store/modules/tarefas/actions'

import {Principal, Topo, TextoTodo,Add, TextoAdicionar, CaixaTexto, Botão,BotãoTexto,} from './styles'

export function Home() {
  const dispatch = useDispatch()
  const tarefas = useSelector(state => state.tarefas)

  const [conteudo, setConteudo] = useState('')

  function criarTarefa() {
    dispatch(adicionarTarefa({ titulo: tarefas.length, conteudo }))
  }

  return (
    <Principal>
      <Topo>
          <TextoTodo>Aplicativo ToDo list</TextoTodo>
        </Topo>
      <Add>
        <TextoAdicionar>Adicione aqui uma tarefa
      </TextoAdicionar>

      <CaixaTexto placeholder="tarefa" onChangeText={(e) => setConteudo(e)} />
      <Botão onPress={criarTarefa}><BotãoTexto>ADICIONAR TAREFA</BotãoTexto></Botão>
      </Add>

      <ScrollView style={{marginTop: 14}} showsVerticalScrollIndicator={false}>
        {tarefas.map(tarefa => (
          <Tarefa key={tarefa.id} tarefa={tarefa} />
        ))}
      </ScrollView>
    </Principal>
  )
}