import Itemcompra from './components/ItemCompras'

const compras = [
  { id: 1, produto: 'Arroz', quantidade: 2},
  { id: 2, produto: 'feijão', quantidade: 3},
  { id: 3, produto: 'batata', quantidade: 10},
  { id: 4, produto: 'carne', quantidade: 5}
]

function App() {
  return (
    <div style={{padding: '20px'}}>
      <h1>Lista de Compras</h1>
      <ul>
        {compras.map((item) => (
        <Itemcompra 
        key= {item.id}
        produto={item.produto}
        quantidade={item.quantidade}
        />
      ))}
      </ul>
    </div>
  )
}

export default App;