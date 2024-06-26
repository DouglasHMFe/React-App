import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInput, Headline, Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import Input from '../components/Input'
import { useAuth } from '../services/auth.services'

function MinhasInformacoes() {
  const { usuario, updatePerfil } = useAuth()
  const [nome, setNome] = useState(usuario.nome)
  const [lastNome, setLastNome] = useState('')
  const [email, setEmail] = useState(usuario.email)
  const [senha, setSenha] = useState('')
  const [confirmSenha, setConfirmSenha] = useState('')

  async function handleSalvarAlteracoesPress() {
    const usuario = { nome, email, senha }

    await updatePerfil({ usuario })
  }

  const navigation = useNavigation()
  const handleExcluirCadastroPress = () => {}
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Button
          icon="chevron-left"
          onPress={() => navigation.goBack()}
        ></Button>
        <Headline style={styles.textHeader}>Minhas informações</Headline>
      </View>
      <View style={styles.inputs}>
        <Input
          label="Nome"
          value={nome}
          mode="outlined"
          onChangeText={text => setNome(text)}
          editable={true}
        />
        <Input
          label="Sobrenome"
          value={lastNome}
          mode="outlined"
          onChangeText={text => setLastNome(text)}
          editable={true}
        />
        <Input
          label="E-mail"
          value={email}
          mode="outlined"
          onChangeText={text => setEmail(text)}
        />
        <Input
          label="Senha"
          value={senha}
          mode="outlined"
          onChangeText={text => setSenha(text)}
          secureTextEntry
        />
        <Input
          label="Confirme sua senha"
          value={confirmSenha}
          mode="outlined"
          onChangeText={text => setConfirmSenha(text)}
          secureTextEntry
        />
      </View>

      <Button
        style={styles.button}
        mode="contained"
        onPress={handleSalvarAlteracoesPress}
      >
        Salvar Alterações
      </Button>
      <Button
        style={styles.button}
        mode="outlined"
        onPress={handleExcluirCadastroPress}
      >
        Excluir cadastro
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
    marginTop: 10
  },
  textHeader: {
    textAlign: 'center',
    fontSize: 25
  },
  input: {
    marginBottom: 10
  },
  inputs: {
    marginTop: 10
  },
  head: {
    flexDirection: 'row',
    marginBottom: 30
  },
  button: {
    marginBottom: 8,
    height: 60,
    justifyContent: 'center',
    marginTop: 15
  }
})

export default MinhasInformacoes
