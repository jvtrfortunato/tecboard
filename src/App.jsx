import './App.css'
import { Banner } from './components/Banner'
import { FormularioDeEvento } from './components/FormularioDeEvento'
import { Tema } from './components/Tema'
// no react, componentes são FUNÇÕES

function App() {

  const temas = [
    {
      id: 1,
      nome: 'front-end'
    },
    {
      id: 2,
      nome: 'back-end'
    },
    {
      id: 3,
      nome: 'devops'
    },
    {
      id: 4,
      nome: 'inteligência artificial'
    },
    {
      id: 5,
      nome: 'data science'
    },
    {
      id: 6,
      nome: 'cloud'
    }
  ]

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <Banner />
      <FormularioDeEvento />
      <section>
        <Tema tema={temas[0]}/>
      </section>
    </main>
  )
}

export default App
